type ReportData = {
  id: number;
  subject: string;
  telescopeModel: string;
  telescopeType: string;
  eyepiece: string;
  magnification: string;
  filter?: string;
  observationRealDurationMin: number;
  observationVirtualDurationMin: number;
  observationStartDate: string;
  observationEndDate: string;
};

type ReportsList = {
  data: ReportData[] | [];
  count: number;
};

export { ReportData, ReportsList };
