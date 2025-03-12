'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class school extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  school.init({
    name:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    address: {
      type:DataTypes.STRING,
      
      allowNull:false
    },
    latitude: {
      type:DataTypes.FLOAT,
      allowNull:false
    },
    longitude: {
      type:DataTypes.FLOAT,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'school',
  });
  return school;
};