"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Loans", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			loan_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			due_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			return_date: {
				type: Sequelize.DATE,
			},
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      id_book: {
        type: Sequelize.INTEGER,
        references: {
          model: 'books',
          key: 'id'
        }
      },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Loans");
	},
};
