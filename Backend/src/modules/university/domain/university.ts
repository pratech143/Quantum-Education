export type University = {
  id: string;
  name: string;
  description: string;
  ranking: number;
  website: string;
  countryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUniversityInput = {
  name: string;
  description: string;
  ranking: number;
  website: string;
  countryId: string;
};

export type UpdateUniversityInput = {
  name?: string | undefined;
  description?: string | undefined;
  ranking?: number | undefined;
  website?: string | undefined;
};
