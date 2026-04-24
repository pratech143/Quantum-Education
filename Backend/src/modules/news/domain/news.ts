import { NewsLabel } from "../../../generated/prisma/enums.js";

export interface News {
  id: string;
  headTitle: string;
  subtitle: string;
  label: NewsLabel;
  description: string;
  image?: string | null | undefined;
  date: Date;
  author?: string | null | undefined;
  authorRole?: string | null | undefined;
  authorImage?: string | null | undefined;
  caption?: string | null | undefined;
  readTime?: string | null | undefined;
  content?: any | null | undefined;
  phases?: any | null | undefined;
  pullQuote?: any | null | undefined;
  isRelatedOnly: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateNewsDto = {
  headTitle: string;
  subtitle: string;
  label: NewsLabel;
  description: string;
  image?: string | null | undefined;
  date?: Date | undefined;
  author?: string | null | undefined;
  authorRole?: string | null | undefined;
  authorImage?: string | null | undefined;
  caption?: string | null | undefined;
  readTime?: string | null | undefined;
  content?: any | null | undefined;
  phases?: any | null | undefined;
  pullQuote?: any | null | undefined;
  isRelatedOnly?: boolean | undefined;
};

export type UpdateNewsDto = {
  headTitle?: string | undefined;
  subtitle?: string | undefined;
  label?: NewsLabel | undefined;
  description?: string | undefined;
  image?: string | null | undefined;
  date?: Date | undefined;
  author?: string | null | undefined;
  authorRole?: string | null | undefined;
  authorImage?: string | null | undefined;
  caption?: string | null | undefined;
  readTime?: string | null | undefined;
  content?: any | null | undefined;
  phases?: any | null | undefined;
  pullQuote?: any | null | undefined;
  isRelatedOnly?: boolean | undefined;
};
