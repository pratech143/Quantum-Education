export type Country = {
  id: string;
  name: string;
  slug: string;
  description: string;
  tuitionFees: number;
  visaInfo: string;
  livingCost: number;
  currency: string;
  heroImage: string | null;
  heroSubtitle: string | null;
  heroStats: unknown | null;
  overview: unknown | null;
  details: unknown | null;
  popularCourses: unknown | null;
  admissionRequirements: unknown | null;
  intakes: unknown | null;
  scholarships: unknown | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CountryWithUniversities = Country & {
  universities: {
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
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export type CreateCountryInput = {
  name: string;
  slug: string;
  description: string;
  tuitionFees: number;
  visaInfo: string;
  livingCost: number;
  currency: string;
  heroImage?: string | undefined;
  heroSubtitle?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroStats?: any;
  overview?: any;
  details?: any;
  popularCourses?: any;
  admissionRequirements?: any;
  intakes?: any;
  scholarships?: any;
};

export type UpdateCountryInput = {
  name?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  tuitionFees?: number | undefined;
  visaInfo?: string | undefined;
  livingCost?: number | undefined;
  currency?: string | undefined;
  heroImage?: string | undefined;
  heroSubtitle?: string | undefined;
  heroStats?: any;
  overview?: any;
  details?: any;
  popularCourses?: any;
  admissionRequirements?: any;
  intakes?: any;
  scholarships?: any;
};
