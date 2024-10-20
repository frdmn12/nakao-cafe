// order.js

"use strict";
const { Model } = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

// const Order = sequelize.define(
//   "orders",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       // references: {
//       //   model: "users",
//       //   key: "id",
//       // },
//     },
//     total: {
//       type: DataTypes.DECIMAL,
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.ENUM("pending", "completed", "cancelled"),
//       defaultValue: "pending",
//     },
//     createdAt: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//     },
//     deletedAt: {
//       type: DataTypes.DATE,
//     },
//   },
//   {
//     paranoid: true,
//     freezeTableName: true,
//   }
// );

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // Order.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      // Order.hasMany(models.OrderItem, { foreignKey: "orderId", as: "orderItems" });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      tableName: "orders",
      modelName: "Order",
      paranoid: true,
      freezeTableName: true,
    }
  );
  return Order;
}