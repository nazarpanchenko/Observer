import { FilterTypes } from '../enums/filter.enums';

type FilterData = {
  id: number;
  filterType?: FilterTypes;
  filter?: string;
};

export { FilterData };
