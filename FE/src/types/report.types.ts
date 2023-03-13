type ReportPaginationConfig = {
  params: {
    page?: number;
    limit?: number;
  }
}

type ReportData = {
  id: number;
  subject: string;
  magnification: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: Date;
  observationEndDate: Date;
};

type ReportsList = {
  data: ReportData[] | [];
  count: number;
};

export { ReportPaginationConfig, ReportData, ReportsList };
