import { EyepieceDiameters, EyepieceSchemas } from '../enums/eyepiece.enums';

type EyepieceData = {
  id: number;
  eyepieceManufacturer: string;
  eyepieceSizeSchema: EyepieceDiameters;
  eyepieceModel: string;
  eyepieceFocus: string;
  eyepieceFieldRange: string;
  eyepieceOpticalSchema: EyepieceSchemas;
  eyepiecePupilScrew: string;
};

export { EyepieceData };
