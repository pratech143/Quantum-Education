export type Country = {
  id: string;
  name: string;
  description: string;
  tuitionFees: number;
  visaInfo: string;
  livingCost: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CountryWithUniversities = Country & {
  universities: {
    id: string;
    name: string;
    description: string;
    ranking: number;
    website: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export type CreateCountryInput = {
  name: string;
  description: string;
  tuitionFees: number;
  visaInfo: string;
  livingCost: number;
  currency: string;
};

export type UpdateCountryInput = {
  name?: string | undefined;
  description?: string | undefined;
  tuitionFees?: number | undefined;
  visaInfo?: string | undefined;
  livingCost?: number | undefined;
  currency?: string | undefined;
};
