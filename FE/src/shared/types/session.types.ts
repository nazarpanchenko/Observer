import { sessionEnums } from '../enums/index';

type SessionData = {
  id?: number;
  category: sessionEnums.SessionCategories;
  userId: number;
  reportsCount: number;
  sessionRealDurationMin: number;
  sessionVirtualDurationMin: number;
  sessionStartDate: Date;
  sessionEndDate: Date;
};

export { SessionData };
