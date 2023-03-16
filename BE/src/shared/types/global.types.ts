type PaginationConfig = {
  page?: number;
  limit?: number;
};

type SequelizeDeleteResponse = {
  deletedRowsCount: number;
};

export { PaginationConfig, SequelizeDeleteResponse };
