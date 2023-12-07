import { Model } from 'sequelize';

import { SessionCategories } from '../enums/session.enums';

type SessionParams = {
  category: SessionCategories;
  sessionRealDurationMin: number;
  sessionVirtualDurationMin: number;
  sessionStartDate: Date;
  sessionEndDate: Date;
};

type SessionData = SessionParams & {
  id?: number;
  reportsCount: number;
};

type SessionModel = Model<SessionData>;

type SessionsList = {
  data: Model<SessionModel>[];
  count: number;
};

export { SessionParams, SessionData, SessionModel, SessionsList };
