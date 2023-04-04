import { Sequelize } from "sequelize";

type DbConf = {
  host: string;
  port: number;
  user: string;
  password: string;
};

type DbInstance = {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  models: {
    [key: string]: any;
  };
};

export { DbConf, DbInstance };
