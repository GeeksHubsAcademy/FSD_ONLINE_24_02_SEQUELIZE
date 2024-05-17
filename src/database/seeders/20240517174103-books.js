'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
			"books",
			[
        {
          id:1,
          title: "Harry Potter y la piedra filosofal",
          gender: "Fantastico",
          id_author: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          title: "Sueño de una noche de verano",
          gender: "Novela",
          id_author: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          title: "El seño de los anullos",
          gender: "JR Tolkien",
          id_author: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
			],
			{}
		);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('authors', null, {});
  }
};
