'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // update order table, fk on userId
    await queryInterface.changeColumn('orders', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    });

    // add deleteAt column to order table
    await queryInterface.addColumn('orders', 'deletedAt', {
      type: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // rollback order table, fk on userId
    await queryInterface.changeColumn('orders', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    // rollback deleteAt column from order table
    await queryInterface.removeColumn('orders', 'deletedAt');
  }
};
