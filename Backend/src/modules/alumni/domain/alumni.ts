export type Alumni = {
  id: string;
  name: string;
  university: string;
  degree: string;
  country: string;
  quote: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateAlumniInput = {
  name: string;
  university: string;
  degree: string;
  country: string;
  quote: string;
  image?: string | undefined;
};

export type UpdateAlumniInput = {
  name?: string | undefined;
  university?: string | undefined;
  degree?: string | undefined;
  country?: string | undefined;
  quote?: string | undefined;
  image?: string | undefined;
};
