type BarlowLensSchema = '2X' | '3X';

type BarlowLensData = {
  id?: number;
  reportId: number;
  barlowLensManufacturer?: string;
  barlowLensSchema?: BarlowLensSchema;
};

export { BarlowLensData, BarlowLensSchema };
