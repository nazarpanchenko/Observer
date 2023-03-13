import { telescopeEnums } from '../enums';

type TelescopeData = {
  id?: number;
  reportId: number;
  telescopeType: telescopeEnums.TelescopeTypes;
  telescopeModel: string;
  telescopeDiameterMm: number;
};

export { TelescopeData };
