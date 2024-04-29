'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // define association here
      Project.belongsTo(models.User, { foreignKey: 'manager_id', as: 'manager' });
    }
  }
  Project.init({
    prj_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    requirements: DataTypes.TEXT,
    status: DataTypes.STRING,
    tenure: DataTypes.INTEGER,
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
