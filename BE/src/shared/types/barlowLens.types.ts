import { BarlowLensSchemas } from '../enums/barlowLens.enums';

type BarlowLensData = {
  id: number;
  barlowLensManufacturer?: string;
  barlowLensSchema?: BarlowLensSchemas;
};

export { BarlowLensSchemas, BarlowLensData };
