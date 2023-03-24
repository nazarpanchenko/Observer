type ReportData = {
  id: number;
  subject: string;
  magnification: string;
  telescopeModel: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: Date;
  observationEndDate: Date;
};

type ReportsList = {
  data: ReportData[] | [];
  count: number;
};

export { ReportData, ReportsList };
