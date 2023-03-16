import { filterEnums } from '../enums';

type FilterData = {
  id?: number;
  filterType?: filterEnums.FilterTypes;
  filter?: string;
};

export { FilterData };
