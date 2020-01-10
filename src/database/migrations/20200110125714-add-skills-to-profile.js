/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users', 'skills', Sequelize.STRING),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Users', 'skills'),
};
