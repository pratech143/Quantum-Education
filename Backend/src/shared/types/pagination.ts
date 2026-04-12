export type PaginationParams = {
  page: number;
  limit: number;
  search?: string | undefined;
};

export type PaginatedResult<T> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};
