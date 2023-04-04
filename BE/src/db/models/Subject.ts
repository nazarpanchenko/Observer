'use strict';

import { Model } from 'sequelize';

import { SubjectTypes } from '../../shared/enums';
import { SubjectData } from '../../shared/types';
import { containsChar } from '../validators';

const subjectModel = (sequelize: any, DataTypes: any) => {
  class Subject extends Model<SubjectData> implements SubjectData {
    id!: number;
    category!: SubjectTypes;
    magnitude!: number;
    rightAscendance!: string;
    declination!: string;
    apparentSize?: number;
    semiMajorAxis?: number;
    axialTilt?: number;
    ecccentricity?: number;
    orbitalInclination?: number;
    rotation?: number;

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

  Subject.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT(11),
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(SubjectTypes)],
            msg: `category field's value must be one of the following: ${Object.values(
              SubjectTypes
            ).join(', ')}`,
          },
        },
      },
      magnitude: {
        type: DataTypes.FLOAT(4, 2),
        allowNull: false,
      },
      rightAscendance: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          containsChar: (char: string) =>
            containsChar('rightAscendance', char, ['h', 'm']),
        },
      },
      declination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          containsChar: (char: string) => containsChar('declination', char, ['deg', "'"]),
        },
      },
      apparentSize: {
        type: DataTypes.FLOAT(4, 2),
        defaultValue: 0.0,
      },
      semiMajorAxis: {
        type: DataTypes.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      axialTilt: {
        type: DataTypes.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      ecccentricity: {
        type: DataTypes.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      orbitalInclination: {
        type: DataTypes.FLOAT(3, 2),
        defaultValue: 0.0,
      },
      rotation: {
        type: DataTypes.FLOAT(3, 2),
        defaultValue: 0.0,
      },
    },
    {
      sequelize,
      modelName: 'Subject',
      tableName: 'subjects',
    }
  );

  return Subject;
};

export default subjectModel;
