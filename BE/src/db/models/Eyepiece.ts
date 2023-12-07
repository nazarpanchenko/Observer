'use strict';

import { Model } from 'sequelize';

import { EyepieceSchemas, EyepieceDiameters, EyepieceData, containsChar } from '../../shared';

const eyepieceModel = (sequelize: any, DataTypes: any) => {
  class Eyepiece extends Model<EyepieceData> implements EyepieceData {
    id!: number;
    eyepieceManufacturer!: string;
    eyepieceModel!: string;
    eyepieceSizeSchema!: EyepieceDiameters;
    eyepieceFocus!: string;
    eyepieceFieldRange!: string;
    eyepieceOpticalSchema!: EyepieceSchemas;
    eyepiecePupilScrew!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.Report, {
        foreignKey: {
          name: 'reportId',
          allowNull: false,
        },
      });
    }
  }

  Eyepiece.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      eyepieceManufacturer: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      eyepieceModel: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      eyepieceSizeSchema: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(EyepieceSchemas)],
            msg: `eyepieceSizeSchema field's value must be one of the following: ${Object.values(
              EyepieceSchemas
            ).join(', ')}`,
          },
        },
      },
      eyepieceFocus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
          containsChar: (char: string) => containsChar('eyepieceFocus', char, ['mm']),
        },
      },
      eyepieceFieldRange: {
        type: DataTypes.STRING(6),
        allowNull: false,
        validate: {
          containsChar: (char: string) => containsChar('eyepieceFieldRange', char, ["'"]),
        },
      },
      eyepieceOpticalSchema: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(EyepieceSchemas)],
            msg: `eyepieceOpticalSchema field's value must be one of the following: ${Object.values(
              EyepieceSchemas
            ).join(', ')}`,
          },
        },
      },
      eyepiecePupilScrew: {
        type: DataTypes.STRING(6),
        allowNull: false,
        validate: {
          containsChar: (char: string) => containsChar('eyepiecePupilScrew', char, ['mm']),
        },
      },
    },
    {
      sequelize,
      modelName: 'Eyepiece',
      tableName: 'eyepieces',
    }
  );

  return Eyepiece;
};

export default eyepieceModel;
