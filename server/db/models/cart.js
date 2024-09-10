// cart.js
"use strict";
const { Model } = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Cart = sequelize.define(
  "carts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "users",
      //   key: "id",
      // },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "products",
      //   key: "id",
      // }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    paranoid: true,
    freezeTableName: true,
  }
);

// Define association manually
Cart.associate = (models) => {
  Cart.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  Cart.belongsTo(models.Product, { foreignKey: "productId", as: "product" });
};

module.exports = Cart;
