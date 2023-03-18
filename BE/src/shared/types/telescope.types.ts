import { TelescopeTypes } from '../enums';

type TelescopeData = {
  id?: number;
  telescopeType: TelescopeTypes;
  telescopeModel: string;
  telescopeDiameterMm: number;
};

export { TelescopeData };
