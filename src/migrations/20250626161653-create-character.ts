'use strict';
import sequelize from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(
    queryInterface: sequelize.QueryInterface,
    Sequelize: sequelize.DataTypes,
  ) {
    await queryInterface.createTable('users', {
      id: Sequelize.INTEGER,
    });
  },

  async down(queryInterface: sequelize.QueryInterface) {
    await queryInterface.dropTable('characters');
  },
};
