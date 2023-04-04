import { SubjectTypes } from '../enums';

type SubjectData = {
  id: number;
  category: SubjectTypes;
  magnitude: number;
  rightAscendance: string;
  declination: string;
  apparentSize?: number;
  semiMajorAxis?: number;
  axialTilt?: number;
  ecccentricity?: number;
  orbitalInclination?: number;
  rotation?: number;
};

export { SubjectData };
