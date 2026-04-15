import { describe, it, expect, beforeEach, vi } from 'vitest';
import { UniversityService } from './university.service.js';
import type { UniversityRepository } from '../ports/university.repository.js';
import type { CountryRepository } from '../../../country/application/ports/country.repository.js';
import type { University } from '../../domain/university.js';
import type { Country } from '../../../country/domain/country.js';

const mockCountry: Country = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  name: 'Australia',
  slug: 'australia',
  description: 'Study abroad destination.',
  tuitionFees: 20000,
  visaInfo: 'Visa info.',
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
  createdAt: new Date(),
  updatedAt: new Date()
};

const mockUniversity: University = {
  id: '660e8400-e29b-41d4-a716-446655440000',
  name: 'University of Melbourne',
  slug: 'university-of-melbourne',
  description: 'Top Australian university.',
  location: 'Victoria',
  image: null,
  ranking: 1,
  qsRanking: '#14',
  tagline: null,
  website: 'https://unimelb.edu.au',
  type: 'UNIVERSITY',
  fees: null,
  heroData: null,
  whySection: null,
  coursesData: null,
  admissionData: null,
  ctaData: null,
  countryId: mockCountry.id,
  createdAt: new Date(),
  updatedAt: new Date()
};

const createMockUniversityRepo = (): UniversityRepository => ({
  create: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
  findById: vi.fn(),
  findByIdWithCountry: vi.fn(),
  findBySlug: vi.fn(),
  findByCountry: vi.fn(),
  findByType: vi.fn(),
  findAll: vi.fn()
});

const createMockCountryRepo = (): Pick<CountryRepository, 'findById'> & Record<string, ReturnType<typeof vi.fn>> => ({
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

describe('UniversityService', () => {
  let service: UniversityService;
  let universityRepo: ReturnType<typeof createMockUniversityRepo>;
  let countryRepo: ReturnType<typeof createMockCountryRepo>;

  beforeEach(() => {
    universityRepo = createMockUniversityRepo();
    countryRepo = createMockCountryRepo();
    service = new UniversityService(universityRepo, countryRepo as unknown as CountryRepository);
  });

  describe('create', () => {
    it('should create a university when country exists', async () => {
      vi.mocked(countryRepo.findById).mockResolvedValue(mockCountry);
      vi.mocked(universityRepo.create).mockResolvedValue(mockUniversity);

      const result = await service.create({
        name: 'University of Melbourne',
        slug: 'university-of-melbourne',
        description: 'Top Australian university.',
        ranking: 1,
        website: 'https://unimelb.edu.au',
        countryId: mockCountry.id
      });

      expect(result).toEqual(mockUniversity);
      expect(countryRepo.findById).toHaveBeenCalledWith(mockCountry.id);
    });

    it('should throw 404 when country does not exist', async () => {
      vi.mocked(countryRepo.findById).mockResolvedValue(null);

      await expect(
        service.create({
          name: 'Some University',
          slug: 'some-university',
          description: 'Some description.',
          ranking: 10,
          website: 'https://example.com',
          countryId: 'non-existent-id'
        })
      ).rejects.toThrow('country does not exist');

      expect(universityRepo.create).not.toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update when university exists', async () => {
      const updated = { ...mockUniversity, ranking: 5 };
      vi.mocked(universityRepo.findById).mockResolvedValue(mockUniversity);
      vi.mocked(universityRepo.update).mockResolvedValue(updated);

      const result = await service.update(mockUniversity.id, { ranking: 5 });

      expect(result.ranking).toBe(5);
    });

    it('should throw 404 when university does not exist', async () => {
      vi.mocked(universityRepo.findById).mockResolvedValue(null);

      await expect(
        service.update('non-existent-id', { ranking: 5 })
      ).rejects.toThrow('not found');
    });
  });

  describe('delete', () => {
    it('should delete when university exists', async () => {
      vi.mocked(universityRepo.findById).mockResolvedValue(mockUniversity);
      vi.mocked(universityRepo.delete).mockResolvedValue(undefined);

      await service.delete(mockUniversity.id);

      expect(universityRepo.delete).toHaveBeenCalledWith(mockUniversity.id);
    });

    it('should throw 404 when university does not exist', async () => {
      vi.mocked(universityRepo.findById).mockResolvedValue(null);

      await expect(service.delete('non-existent-id')).rejects.toThrow('not found');
    });
  });

  describe('getByCountry', () => {
    it('should return paginated universities when country exists', async () => {
      const paginatedResult = {
        data: [mockUniversity],
        pagination: { page: 1, limit: 10, total: 1, totalPages: 1 }
      };
      vi.mocked(countryRepo.findById).mockResolvedValue(mockCountry);
      vi.mocked(universityRepo.findByCountry).mockResolvedValue(paginatedResult);

      const result = await service.getByCountry(mockCountry.id, { page: 1, limit: 10 });

      expect(result.data).toHaveLength(1);
      expect(result.pagination.total).toBe(1);
    });

    it('should throw 404 when country does not exist', async () => {
      vi.mocked(countryRepo.findById).mockResolvedValue(null);

      await expect(
        service.getByCountry('non-existent-id', { page: 1, limit: 10 })
      ).rejects.toThrow('country does not exist');
    });
  });
});
