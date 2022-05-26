import Sequelize from 'sequelize';
import sequelize from '../config/database';

const tableName = 'shows';

const Show = sequelize.define(
  'Show',
  {
    idService: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.NUMBER,
    },
    date: {
      type: Sequelize.DATE,
    },
    places: {
      type: Sequelize.NUMBER,
    },
  },
  { tableName },
);

export default Show;
