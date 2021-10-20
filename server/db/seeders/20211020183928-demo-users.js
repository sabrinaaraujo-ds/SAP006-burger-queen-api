module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
      role: 'kitchen',
      restaurant: 'Deburger',
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      name: 'teste',
      email: 'teste@gmail.com',
      password: '123456',
      role: 'hall',
      restaurant: 'Deburger',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
