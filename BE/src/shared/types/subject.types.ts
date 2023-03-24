import { SubjectTypes } from '../enums';

type SubjectData = {
  id: number;
  category: SubjectTypes;
  apparentSize?: number;
  magnitude: number;
  semiMajorAxis?: number;
  axialTilt?: number;
  ecccentricity?: number;
  inclination?: number;
  rotation?: number;
};

export { SubjectData };
