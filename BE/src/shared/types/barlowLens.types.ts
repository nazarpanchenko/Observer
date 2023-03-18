type BarlowLensSchema = '2X' | '3X';

type BarlowLensData = {
  id?: number;
  barlowLensManufacturer?: string;
  barlowLensSchema?: BarlowLensSchema;
};

export { BarlowLensSchema, BarlowLensData };
