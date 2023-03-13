import { Model } from 'sequelize';

import { sessionEnums } from '../enums';

type SessionData = {
  id?: number;
  category: sessionEnums.SessionTypes;
  userId: number;
  username: string;
  reportsCount: number;
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
