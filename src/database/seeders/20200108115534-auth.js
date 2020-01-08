/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Auths',
    [
      {
        username: 'JONATHAN_SHYAKA',
        password: '$2b$10$5amPOJPym3Y2k41MMp/0hO15fPC6LBuuYXz9s/AiPZLjSajjBO5em',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Auths', null, {}),
};
