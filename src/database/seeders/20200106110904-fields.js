/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Fields',
    [
      {
        name: 'Web',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Designs',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Images',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Music',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Locations', null, {}),
};
