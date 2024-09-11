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
    // update orderitems table, fk on orderId and productId
    await queryInterface.changeColumn('orderItems', 'orderId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id',
      },
    });
    await queryInterface.changeColumn('orderItems', 'productId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
    });

    // add deleteAt column to orderitems table
    await queryInterface.addColumn('orderItems', 'deletedAt', {
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

    // rollback orderitems table, fk on orderId and productId
    await queryInterface.changeColumn('orderItems', 'orderId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn('orderItems', 'productId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    // rollback deleteAt column from orderitems table
    await queryInterface.removeColumn('orderItems', 'deletedAt');
  }
};
