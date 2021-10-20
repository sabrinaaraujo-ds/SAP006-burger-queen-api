module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'password',
      {
        type: Sequelize.STRING,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'users',
      'password',
      {
        type: Sequelize.STRING,
      },
    );
  },
};
