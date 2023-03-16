'use strict';

import { Model } from 'sequelize';

import { eyepieceEnums } from '../../shared/enums';
import { eyepieceTypes } from '../../shared/types';
import { containsChar } from '../../utils';

interface EyepieceAttributes extends eyepieceTypes.EyepieceData {}

const eyepieceModel = (sequelize: any, DataTypes: any) => {
  class Eyepiece extends Model<EyepieceAttributes> implements EyepieceAttributes {
    id?: number;
    eyepieceManufacturer!: string;
    eyepieceModel!: string;
    eyepieceSizeSchema!: eyepieceEnums.EyepieceDiameters;
    eyepieceFocus!: string;
    eyepieceFieldRange!: string;
    eyepieceOpticalSchema!: eyepieceEnums.EyepieceSchemas;
    eyepiecePupilScrew!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.Report, {
        foreignKey: {
          field: 'reportId',
          allowNull: false,
        },
        onDelete: 'CASCADE',
      });
    }
  }

  Eyepiece.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
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
            args: [Object.values(eyepieceEnums.EyepieceSchemas)],
            msg: `eyepieceSizeSchema field's value must be one of the following: ${Object.values(
              eyepieceEnums.EyepieceSchemas
            ).join(', ')}`,
          },
        },
      },
      eyepieceFocus: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
          containsChar: containsChar('eyepieceFocus', 'mm'),
        },
      },
      eyepieceFieldRange: {
        type: DataTypes.STRING(6),
        allowNull: false,
        validate: {
          containsChar: containsChar('eyepieceFieldRange', `'`),
        },
      },
      eyepieceOpticalSchema: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(eyepieceEnums.EyepieceSchemas)],
            msg: `eyepieceOpticalSchema field's value must be one of the following: ${Object.values(
              eyepieceEnums.EyepieceSchemas
            ).join(', ')}`,
          },
        },
      },
      eyepiecePupilScrew: {
        type: DataTypes.STRING(6),
        allowNull: false,
        validate: {
          containsChar: containsChar('eyepiecePupilScrew', 'mm'),
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
