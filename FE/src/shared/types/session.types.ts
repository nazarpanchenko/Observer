import { SessionCategories } from '../enums/index';

type SessionData = {
  id?: number;
  category: SessionCategories;
  userId: number;
  reportsCount: number;
  sessionRealDurationMin: number;
  sessionVirtualDurationMin: number;
  sessionStartDate: Date;
  sessionEndDate: Date;
};

export { SessionData };
