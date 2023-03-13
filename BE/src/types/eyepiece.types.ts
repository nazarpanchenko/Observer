import { eyepieceEnums } from '../enums';

type EyepieceData = {
  id?: number;
  reportId: number;
  eyepieceManufacturer: string;
  eyepieceSizeSchema: eyepieceEnums.EyepieceDiameters;
  eyepieceModel: string;
  eyepieceFocus: string;
  eyepieceFieldRange: string;
  eyepieceOpticalSchema: eyepieceEnums.EyepieceSchemas;
  eyepiecePupilScrew: string;
};

export { EyepieceData };
