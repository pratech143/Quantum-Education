import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import request from 'supertest';
import { createApp } from '../../../app.js';
import { connectDatabase, disconnectDatabase } from '../../../shared/database/prisma.js';
import {
  generateAdminToken,
  cleanupTestData,
  createTestCountry,
  createTestUniversity
} from '../../../tests/helpers/setup.js';

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
  const { prisma } = await import('../../../shared/database/prisma.js');
  await prisma.university.deleteMany({});
  await prisma.country.deleteMany({});
});

describe('University API - Integration Tests', () => {
  // ── POST /api/v1/universities/country/:countryId ────────
  describe('POST /api/v1/universities/country/:countryId', () => {
    const validPayload = {
      name: 'University of Toronto',
      slug: 'university-of-toronto',
      description: 'One of the top universities in Canada.',
      ranking: 18,
      website: 'https://utoronto.ca'
    };

    it('should create a university under an existing country', async () => {
      const country = await createTestCountry({ name: 'Canada' });

      const res = await request(app)
        .post(`/api/v1/universities/country/${country.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send(validPayload);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe('University of Toronto');
      expect(res.body.data.countryId).toBe(country.id);
      expect(res.body.data.ranking).toBe(18);
    });

    it('should return 404 when country does not exist', async () => {
      const res = await request(app)
        .post('/api/v1/universities/country/550e8400-e29b-41d4-a716-446655440000')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(validPayload);

      expect(res.status).toBe(404);
      expect(res.body.code).toBe('COUNTRY_NOT_FOUND');
    });

    it('should return 401 without auth token', async () => {
      const country = await createTestCountry({ name: 'Canada' });

      const res = await request(app)
        .post(`/api/v1/universities/country/${country.id}`)
        .send(validPayload);

      expect(res.status).toBe(401);
    });

    it('should return 400 with invalid data', async () => {
      const country = await createTestCountry({ name: 'Canada' });

      const res = await request(app)
        .post(`/api/v1/universities/country/${country.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ name: 'X' }); // Too short, missing fields

      expect(res.status).toBe(400);
      expect(res.body.code).toBe('VALIDATION_ERROR');
    });

    it('should reject negative ranking', async () => {
      const country = await createTestCountry({ name: 'Canada' });

      const res = await request(app)
        .post(`/api/v1/universities/country/${country.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ ...validPayload, ranking: -5 });

      expect(res.status).toBe(400);
    });

    it('should reject invalid website URL', async () => {
      const country = await createTestCountry({ name: 'Canada' });

      const res = await request(app)
        .post(`/api/v1/universities/country/${country.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ ...validPayload, website: 'not-a-url' });

      expect(res.status).toBe(400);
    });
  });

  // ── GET /api/v1/universities/country/:countryId ─────────
  describe('GET /api/v1/universities/country/:countryId', () => {
    it('should return paginated universities for a country', async () => {
      const country = await createTestCountry({ name: 'UK' });
      await createTestUniversity(country.id, { name: 'Oxford', ranking: 1 });
      await createTestUniversity(country.id, { name: 'Cambridge', ranking: 2 });
      await createTestUniversity(country.id, { name: 'Imperial College', ranking: 3 });

      const res = await request(app)
        .get(`/api/v1/universities/country/${country.id}?page=1&limit=2`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(2);
      expect(res.body.pagination.total).toBe(3);
      expect(res.body.pagination.totalPages).toBe(2);
    });

    it('should return universities ordered by ranking', async () => {
      const country = await createTestCountry({ name: 'UK' });
      await createTestUniversity(country.id, { name: 'Imperial', ranking: 3 });
      await createTestUniversity(country.id, { name: 'Oxford', ranking: 1 });
      await createTestUniversity(country.id, { name: 'Cambridge', ranking: 2 });

      const res = await request(app)
        .get(`/api/v1/universities/country/${country.id}`);

      expect(res.status).toBe(200);
      expect(res.body.data[0].name).toBe('Oxford');
      expect(res.body.data[1].name).toBe('Cambridge');
      expect(res.body.data[2].name).toBe('Imperial');
    });

    it('should search universities by name', async () => {
      const country = await createTestCountry({ name: 'UK' });
      await createTestUniversity(country.id, { name: 'University of Oxford', ranking: 1 });
      await createTestUniversity(country.id, { name: 'University of Cambridge', ranking: 2 });
      await createTestUniversity(country.id, { name: 'Imperial College London', ranking: 3 });

      const res = await request(app)
        .get(`/api/v1/universities/country/${country.id}?search=university`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(2);
    });

    it('should return empty list for country with no universities', async () => {
      const country = await createTestCountry({ name: 'UK' });

      const res = await request(app)
        .get(`/api/v1/universities/country/${country.id}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toEqual([]);
      expect(res.body.pagination.total).toBe(0);
    });

    it('should return 404 for non-existent country', async () => {
      const res = await request(app)
        .get('/api/v1/universities/country/550e8400-e29b-41d4-a716-446655440000');

      expect(res.status).toBe(404);
      expect(res.body.code).toBe('COUNTRY_NOT_FOUND');
    });

    it('should not return universities from other countries', async () => {
      const uk = await createTestCountry({ name: 'UK' });
      const canada = await createTestCountry({ name: 'Canada' });
      await createTestUniversity(uk.id, { name: 'Oxford', ranking: 1 });
      await createTestUniversity(canada.id, { name: 'UofT', ranking: 1 });

      const res = await request(app)
        .get(`/api/v1/universities/country/${uk.id}`);

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].name).toBe('Oxford');
    });
  });

  // ── PATCH /api/v1/universities/:id ──────────────────────
  describe('PATCH /api/v1/universities/:id', () => {
    it('should update university fields', async () => {
      const country = await createTestCountry({ name: 'Japan' });
      const university = await createTestUniversity(country.id, { name: 'Tokyo Uni', ranking: 10 });

      const res = await request(app)
        .patch(`/api/v1/universities/${university.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ ranking: 5, name: 'University of Tokyo' });

      expect(res.status).toBe(200);
      expect(res.body.data.ranking).toBe(5);
      expect(res.body.data.name).toBe('University of Tokyo');
    });

    it('should return 404 for non-existent university', async () => {
      const res = await request(app)
        .patch('/api/v1/universities/550e8400-e29b-41d4-a716-446655440000')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({ ranking: 5 });

      expect(res.status).toBe(404);
      expect(res.body.code).toBe('UNIVERSITY_NOT_FOUND');
    });

    it('should return 400 for empty update body', async () => {
      const country = await createTestCountry({ name: 'Japan' });
      const university = await createTestUniversity(country.id, { name: 'Kyoto Uni', ranking: 15 });

      const res = await request(app)
        .patch(`/api/v1/universities/${university.id}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({});

      expect(res.status).toBe(400);
    });

    it('should return 401 without auth token', async () => {
      const country = await createTestCountry({ name: 'Japan' });
      const university = await createTestUniversity(country.id, { name: 'Osaka Uni', ranking: 20 });

      const res = await request(app)
        .patch(`/api/v1/universities/${university.id}`)
        .send({ ranking: 5 });

      expect(res.status).toBe(401);
    });
  });

  // ── DELETE /api/v1/universities/:id ─────────────────────
  describe('DELETE /api/v1/universities/:id', () => {
    it('should delete a university', async () => {
      const country = await createTestCountry({ name: 'Germany' });
      const university = await createTestUniversity(country.id, { name: 'TU Berlin', ranking: 30 });

      const res = await request(app)
        .delete(`/api/v1/universities/${university.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      // Verify deleted
      const { prisma } = await import('../../../shared/database/prisma.js');
      const found = await prisma.university.findUnique({ where: { id: university.id } });
      expect(found).toBeNull();
    });

    it('should return 404 for non-existent university', async () => {
      const res = await request(app)
        .delete('/api/v1/universities/550e8400-e29b-41d4-a716-446655440000')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(res.status).toBe(404);
    });

    it('should return 401 without auth token', async () => {
      const country = await createTestCountry({ name: 'Germany' });
      const university = await createTestUniversity(country.id, { name: 'LMU Munich', ranking: 25 });

      const res = await request(app)
        .delete(`/api/v1/universities/${university.id}`);

      expect(res.status).toBe(401);
    });
  });
});
