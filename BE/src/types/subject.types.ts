import { subjectEnums } from '../enums';

type SubjectData = {
  id?: number;
  reportId: number;
  category: subjectEnums.SubjectTypes;
};

export { SubjectData };
