import { Model } from 'sequelize';

import { sessionEnums } from '../enums';

type SessionData = {
  id?: number;
  category: sessionEnums.SessionCategories;
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

export {
  SessionData,
  SessionModel,
  SessionsList,
};
