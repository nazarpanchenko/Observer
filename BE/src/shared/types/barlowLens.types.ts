import { BarlowLensSchemas } from '../enums';

type BarlowLensData = {
  id: number;
  barlowLensManufacturer?: string;
  barlowLensSchema?: BarlowLensSchemas;
};

export { BarlowLensSchemas, BarlowLensData };
