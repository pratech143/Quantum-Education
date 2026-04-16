import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CountryService } from './country.service.js';
import type { CountryRepository } from '../ports/country.repository.js';
import type { Country, CountryWithUniversities } from '../../domain/country.js';

const mockCountry: Country = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  name: 'Australia',
  slug: 'australia',
  description: 'A popular study abroad destination.',
  tuitionFees: 20000,
  visaInfo: 'Student visa subclass 500 required.',
  livingCost: 1500,
  currency: 'AUD',
  heroImage: null,
  heroSubtitle: null,
  heroStats: null,
  overview: null,
  details: null,
  popularCourses: null,
  admissionRequirements: null,
  intakes: null,
  scholarships: null,
  createdAt: new Date('2026-01-01'),
  updatedAt: new Date('2026-01-01')
};

const createMockRepository = (): CountryRepository => ({
  create: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
  findById: vi.fn(),
  findByIdWithUniversities: vi.fn(),
  findBySlug: vi.fn(),
  findBySlugWithUniversities: vi.fn(),
  findByName: vi.fn(),
  findAll: vi.fn()
});

describe('CountryService', () => {
  let service: CountryService;
  let repository: ReturnType<typeof createMockRepository>;

  beforeEach(() => {
    repository = createMockRepository();
    service = new CountryService(repository);
  });

  describe('create', () => {
    it('should create a country when name is unique', async () => {
      vi.mocked(repository.findByName).mockResolvedValue(null);
      vi.mocked(repository.create).mockResolvedValue(mockCountry);

      const result = await service.create({
        name: 'Australia',
        slug: 'australia',
        description: 'A popular study abroad destination.',
        tuitionFees: 20000,
        visaInfo: 'Student visa subclass 500 required.',
        livingCost: 1500,
        currency: 'AUD'
      });

      expect(result).toEqual(mockCountry);
      expect(repository.findByName).toHaveBeenCalledWith('Australia');
      expect(repository.create).toHaveBeenCalledOnce();
    });

    it('should throw 409 when country name already exists', async () => {
      vi.mocked(repository.findByName).mockResolvedValue(mockCountry);

      await expect(
        service.create({
          name: 'Australia',
          slug: 'australia',
          description: 'Duplicate country.',
          tuitionFees: 20000,
          visaInfo: 'Visa info.',
          livingCost: 1500,
          currency: 'AUD'
        })
      ).rejects.toThrow('already exists');

      expect(repository.create).not.toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update when country exists', async () => {
      const updated = { ...mockCountry, tuitionFees: 25000 };
      vi.mocked(repository.findById).mockResolvedValue(mockCountry);
      vi.mocked(repository.update).mockResolvedValue(updated);

      const result = await service.update(mockCountry.id, { tuitionFees: 25000 });

      expect(result.tuitionFees).toBe(25000);
      expect(repository.update).toHaveBeenCalledWith(mockCountry.id, { tuitionFees: 25000 });
    });

    it('should throw 404 when country does not exist', async () => {
      vi.mocked(repository.findById).mockResolvedValue(null);

      await expect(
        service.update('non-existent-id', { tuitionFees: 25000 })
      ).rejects.toThrow('not found');
    });

    it('should throw 409 when renaming to an existing name', async () => {
      const anotherCountry = { ...mockCountry, id: 'other-id', name: 'Canada' };
      vi.mocked(repository.findById).mockResolvedValue(mockCountry);
      vi.mocked(repository.findByName).mockResolvedValue(anotherCountry);

      await expect(
        service.update(mockCountry.id, { name: 'Canada' })
      ).rejects.toThrow('already exists');

      expect(repository.update).not.toHaveBeenCalled();
    });

    it('should allow updating to the same name (no-op rename)', async () => {
      vi.mocked(repository.findById).mockResolvedValue(mockCountry);
      vi.mocked(repository.update).mockResolvedValue(mockCountry);

      await service.update(mockCountry.id, { name: 'Australia' });

      expect(repository.findByName).not.toHaveBeenCalled();
      expect(repository.update).toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete when country exists', async () => {
      vi.mocked(repository.findById).mockResolvedValue(mockCountry);
      vi.mocked(repository.delete).mockResolvedValue(undefined);

      await service.delete(mockCountry.id);

      expect(repository.delete).toHaveBeenCalledWith(mockCountry.id);
    });

    it('should throw 404 when country does not exist', async () => {
      vi.mocked(repository.findById).mockResolvedValue(null);

      await expect(service.delete('non-existent-id')).rejects.toThrow('not found');
    });
  });

  describe('getById', () => {
    it('should return country with universities', async () => {
      const countryWithUnis: CountryWithUniversities = {
        ...mockCountry,
        universities: [
          {
            id: 'uni-1',
            name: 'University of Melbourne',
            slug: 'university-of-melbourne',
            description: 'Top university.',
            location: 'Victoria',
            image: null,
            ranking: 1,
            qsRanking: '#14',
            tagline: null,
            website: 'https://unimelb.edu.au',
            type: 'UNIVERSITY',
            fees: null,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]
      };
      vi.mocked(repository.findByIdWithUniversities).mockResolvedValue(countryWithUnis);

      const result = await service.getById(mockCountry.id);

      expect(result.universities).toHaveLength(1);
      expect(result.universities[0]!.name).toBe('University of Melbourne');
    });

    it('should throw 404 when country does not exist', async () => {
      vi.mocked(repository.findByIdWithUniversities).mockResolvedValue(null);

      await expect(service.getById('non-existent-id')).rejects.toThrow('not found');
    });
  });

  describe('getAll', () => {
    it('should return paginated results', async () => {
      const paginatedResult = {
        data: [mockCountry],
        pagination: { page: 1, limit: 10, total: 1, totalPages: 1 }
      };
      vi.mocked(repository.findAll).mockResolvedValue(paginatedResult);

      const result = await service.getAll({ page: 1, limit: 10 });

      expect(result.data).toHaveLength(1);
      expect(result.pagination.total).toBe(1);
    });
  });
});
