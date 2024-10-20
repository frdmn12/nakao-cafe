// // product.js
// "use strict";
const { Model } = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Cart, { foreignKey: "id" });
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      loc_origin: {
        type: DataTypes.CHAR,
      },
      stock_qty: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.FLOAT,
      },
      roast_level: {
        type: DataTypes.STRING,
      },
      grind_option: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "products",
      modelName: "Product",
      paranoid: true,
      freezeTableName: true,
    }
  );
  return Product;
}