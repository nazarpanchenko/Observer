import { FilterTypes } from '../enums';

type FilterData = {
  id?: number;
  filterType?: FilterTypes;
  filter?: string;
};

export { FilterData };
