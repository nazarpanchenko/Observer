import { TelescopeTypes } from '../enums/telescope.enums';

type TelescopeData = {
  id: number;
  type: TelescopeTypes;
  model: string;
  diameterMm: number;
  lightForce: string;
  resolution: number;
};

export { TelescopeData };
