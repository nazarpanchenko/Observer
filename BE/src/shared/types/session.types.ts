import { Model } from 'sequelize';

import { SessionCategories } from '../enums';

type SessionData = {
  id?: number;
  category: SessionCategories;
  reportsCount: number;
  sessionRealDurationMin: number;
  sessionVirtualDurationMin: number;
  sessionStartDate: Date;
  sessionEndDate: Date;
};

type SessionModel = Model<SessionData>;

type SessionsList = {
  data: Model<SessionModel>[];
  count: number;
};

export { SessionData, SessionModel, SessionsList };
