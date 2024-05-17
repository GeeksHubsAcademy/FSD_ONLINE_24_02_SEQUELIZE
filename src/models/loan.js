'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Loan.init({
    loan_date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    id_user: DataTypes.INTEGER,
    id_book: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Loan',
    tableName: 'loans'
  });
  return Loan;
};