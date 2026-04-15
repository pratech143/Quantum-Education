import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import request from 'supertest';
import { createApp } from '../../../app.js';
import { connectDatabase, disconnectDatabase } from '../../../shared/database/prisma.js';
import { generateAdminToken, cleanupTestData, createTestCountry } from '../../../tests/helpers/setup.js';

const app = createApp();
let adminToken: string;

beforeAll(async () => {
  await connectDatabase();
  adminToken = await generateAdminToken();
});

afterAll(async () => {
  await cleanupTestData();
  await disconnectDatabase();
});

beforeEach(async () => {
  // Clean countries (cascades universities) before each test
  const { prisma } = await import('../../../shared/database/prisma.js');
  await prisma.university.deleteMany({});
  await prisma.country.deleteMany({});
});

describe('Country API - Integration Tests', () => {
  // ── POST /api/v1/countries ──────────────────────────────
  describe('POST /api/v1/countries', () => {
    const validPayload = {
      name: 'Australia',
      slug: 'australia',
      description: 'A popular destination for international students.',
      tuitionFees: 20000,
      visaInfo: 'Student visa subclass 500 is required.',
      livingCost: 1500,
      currency: 'AUD'
    };

    it('should create a country with valid data and admin token', async () => {
      const res = await request(app)
        .post('/api/v1/countries')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(validPayload);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe('Australia');
      expect(res.body.data.currency).toBe('AUD');
      expect(res.body.data.id).toBeDefined();
    });

    it('should return 401 without auth token', async () => {
      const res = await request(app)
        .post('/api/v1/countries')
        .send(validPayload);

      expect(res.status).toBe(401);
    });

    it('should return 400 with invalid data', async () => {
      const res = await request(app)
        .post('/api/v1/countries')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ name: 'A' }); // Too short, missing fields

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.code).toBe('VALIDATION_ERROR');
    });

    it('should return 409 when creating a duplicate country', async () => {
      await request(app)
        .post('/api/v1/countries')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(validPayload);

      const res = await request(app)
        .post('/api/v1/countries')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(validPayload);

      expect(res.status).toBe(409);
      expect(res.body.code).toBe('COUNTRY_ALREADY_EXISTS');
    });

    it('should reject extra fields in strict mode', async () => {
      const res = await request(app)
        .post('/api/v1/countries')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ ...validPayload, extraField: 'not allowed' });

      expect(res.status).toBe(400);
    });

    it('should reject negative tuition fees', async () => {
      const res = await request(app)
        .post('/api/v1/countries')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ ...validPayload, tuitionFees: -500 });

      expect(res.status).toBe(400);
    });
  });

  // ── GET /api/v1/countries ───────────────────────────────
  describe('GET /api/v1/countries', () => {
    it('should return an empty paginated list', async () => {
      const res = await request(app).get('/api/v1/countries');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toEqual([]);
      expect(res.body.pagination.total).toBe(0);
    });

    it('should return paginated countries', async () => {
      await createTestCountry({ name: 'Australia' });
      await createTestCountry({ name: 'Canada' });
      await createTestCountry({ name: 'United Kingdom' });

      const res = await request(app).get('/api/v1/countries?page=1&limit=2');

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(2);
      expect(res.body.pagination.total).toBe(3);
      expect(res.body.pagination.totalPages).toBe(2);
    });

    it('should search countries by name', async () => {
      await createTestCountry({ name: 'Australia' });
      await createTestCountry({ name: 'Austria' });
      await createTestCountry({ name: 'Canada' });

      const res = await request(app).get('/api/v1/countries?search=aust');

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(2);
      expect(res.body.data.every((c: { name: string }) => c.name.toLowerCase().includes('aust'))).toBe(true);
    });

    it('should handle page beyond total pages', async () => {
      await createTestCountry({ name: 'Australia' });

      const res = await request(app).get('/api/v1/countries?page=99');

      expect(res.status).toBe(200);
      expect(res.body.data).toEqual([]);
    });
  });

  // ── GET /api/v1/countries/:id ───────────────────────────
  describe('GET /api/v1/countries/:id', () => {
    it('should return a country with its universities', async () => {
      const country = await createTestCountry({ name: 'Germany' });
      const { prisma } = await import('../../../shared/database/prisma.js');
      await prisma.university.create({
        data: {
          name: 'TU Munich',
          slug: 'tu-munich',
          description: 'Top technical university in Germany.',
          ranking: 1,
          website: 'https://tum.de',
          countryId: country.id
        } as any
      });

      const res = await request(app).get(`/api/v1/countries/${country.id}`);

      expect(res.status).toBe(200);
      expect(res.body.data.name).toBe('Germany');
      expect(res.body.data.universities).toHaveLength(1);
      expect(res.body.data.universities[0].name).toBe('TU Munich');
    });

    it('should return 404 for non-existent country', async () => {
      const res = await request(app).get('/api/v1/countries/550e8400-e29b-41d4-a716-446655440000');

      expect(res.status).toBe(404);
      expect(res.body.code).toBe('COUNTRY_NOT_FOUND');
    });

    it('should return 400 for invalid UUID', async () => {
      const res = await request(app).get('/api/v1/countries/not-a-uuid');

      expect(res.status).toBe(400);
    });
  });

  // ── PATCH /api/v1/countries/:id ─────────────────────────
  describe('PATCH /api/v1/countries/:id', () => {
    it('should update a country field', async () => {
      const country = await createTestCountry({ name: 'Japan' });

      const res = await request(app)
        .patch(`/api/v1/countries/${country.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ tuitionFees: 18000 });

      expect(res.status).toBe(200);
      expect(res.body.data.tuitionFees).toBe(18000);
      expect(res.body.data.name).toBe('Japan');
    });

    it('should return 404 for non-existent country', async () => {
      const res = await request(app)
        .patch('/api/v1/countries/550e8400-e29b-41d4-a716-446655440000')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ tuitionFees: 18000 });

      expect(res.status).toBe(404);
    });

    it('should return 400 for empty update body', async () => {
      const country = await createTestCountry({ name: 'France' });

      const res = await request(app)
        .patch(`/api/v1/countries/${country.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({});

      expect(res.status).toBe(400);
    });

    it('should return 401 without auth token', async () => {
      const country = await createTestCountry({ name: 'Italy' });

      const res = await request(app)
        .patch(`/api/v1/countries/${country.id}`)
        .send({ tuitionFees: 12000 });

      expect(res.status).toBe(401);
    });
  });

  // ── DELETE /api/v1/countries/:id ────────────────────────
  describe('DELETE /api/v1/countries/:id', () => {
    it('should delete a country and cascade to universities', async () => {
      const country = await createTestCountry({ name: 'South Korea' });
      const { prisma } = await import('../../../shared/database/prisma.js');
      await prisma.university.create({
        data: {
          name: 'Seoul National University',
          slug: 'seoul-national-university',
          description: 'Top university in South Korea.',
          ranking: 1,
          website: 'https://snu.ac.kr',
          countryId: country.id
        } as any
      });

      const res = await request(app)
        .delete(`/api/v1/countries/${country.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(res.status).toBe(200);

      // Verify cascade: universities also deleted
      const universities = await prisma.university.findMany({ where: { countryId: country.id } });
      expect(universities).toHaveLength(0);
    });

    it('should return 404 for non-existent country', async () => {
      const res = await request(app)
        .delete('/api/v1/countries/550e8400-e29b-41d4-a716-446655440000')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(res.status).toBe(404);
    });

    it('should return 401 without auth token', async () => {
      const country = await createTestCountry({ name: 'Spain' });

      const res = await request(app).delete(`/api/v1/countries/${country.id}`);

      expect(res.status).toBe(401);
    });
  });
});
