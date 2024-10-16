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
    // new column on product table, the column name is 'loc_origin', 'stock_qty', 'weight', 'roast_level', 'grind_option'
    await queryInterface.addColumn('products', 'loc_origin', {
      type: Sequelize.CHAR
    });
    await queryInterface.addColumn('products', 'stock_qty', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addColumn('products', 'weight', {
      type: Sequelize.FLOAT
    });
    await queryInterface.addColumn('products', 'roast_level', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('products', 'grind_option', {
      type: Sequelize.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('products', 'loc_origin');
    await queryInterface.removeColumn('products', 'stock_qty');
    await queryInterface.removeColumn('products', 'weight');
    await queryInterface.removeColumn('products', 'roast_level');
    await queryInterface.removeColumn('products', 'grind_option');

  }
};
