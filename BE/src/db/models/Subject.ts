'use strict';

import { Model } from 'sequelize';

import { subjectEnums } from '../../shared/enums';
import { subjectTypes } from '../../shared/types';

interface SubjectAttributes extends subjectTypes.SubjectData {}

const subjectModel = (sequelize: any, DataTypes: any) => {
  class Subject extends Model<SubjectAttributes> implements SubjectAttributes {
    id?: number;
    category!: subjectEnums.SubjectTypes;

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
        onDelete: 'CASCADE'
      });
    }
  }

  Subject.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [Object.values(subjectEnums.SubjectTypes)],
            msg: `category field's value must be one of the following: ${Object.values(
              subjectEnums.SubjectTypes
            ).join(', ')}`,
          },
        },
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
