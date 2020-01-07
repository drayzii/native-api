/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Fields',
    [
      {
        name: 'WEB',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DESIGNS',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'IMAGES',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'MUSIC',
        admin: 'JONATHAN_SHYAKA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Locations', null, {}),
};
