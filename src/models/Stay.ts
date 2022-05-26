import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'stays';

const Stay = sequelize.define(
  'Stays',
  {
    idService: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.NUMBER,
    },
    fromDate: {
      type: Sequelize.DATE,
    },
    toDate: {
      type: Sequelize.DATE,
    },
    places: {
      type: Sequelize.NUMBER,
    },
  },
  { tableName },
);

export default Stay;
