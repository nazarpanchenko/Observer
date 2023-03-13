import { filterEnums } from '../enums';

type FilterData = {
  id?: number;
  reportId: number;
  filterType?: filterEnums.FilterTypes;
  filter?: string;
};

export { FilterData };
