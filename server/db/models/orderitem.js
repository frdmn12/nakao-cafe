// orderItem.js
'use strict';
const { Model } = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const OrderItem = sequelize.define(
  "orderItems",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "orders",
      //   key: "id",
      // },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "products",
      //   key: "id",
      // },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
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

module.exports = OrderItem;