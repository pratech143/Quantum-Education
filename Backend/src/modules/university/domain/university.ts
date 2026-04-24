export type University = {
  id: string;
  name: string;
  slug: string;
  description: string;
  location: string | null;
  image: string | null;
  ranking: number;
  qsRanking: string | null;
  tagline: string | null;
  website: string;
  type: string;
  fees: string | null;
  heroData: unknown | null;
  whySection: unknown | null;
  coursesData: unknown | null;
  admissionData: unknown | null;
  countryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UniversityWithCountry = University & {
  country: {
    id: string;
    name: string;
    slug: string;
  };
};

export type CreateUniversityInput = {
  name: string;
  slug: string;
  description: string;
  location?: string | undefined;
  image?: string | undefined;
  ranking: number;
  qsRanking?: string | undefined;
  tagline?: string | undefined;
  website: string;
  type?: string | undefined;
  fees?: string | undefined;
  heroData?: any;
  whySection?: any;
  coursesData?: any;
  admissionData?: any;
  countryId: string;
};

export type UpdateUniversityInput = {
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  location?: string | undefined;
  image?: string | undefined;
  ranking?: number | undefined;
  qsRanking?: string | undefined;
  tagline?: string | undefined;
  website?: string | undefined;
  type?: string | undefined;
  fees?: string | undefined;
  heroData?: any;
  whySection?: any;
  coursesData?: any;
  admissionData?: any;
};
