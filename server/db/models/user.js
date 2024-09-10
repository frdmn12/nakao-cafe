// user.js
"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database"); // Pastikan path ini benar

const User = sequelize.define(
  "users",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
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
    paranoid: true, // Soft delete
    freezeTableName: true, // Model tableName will be the same as the model name
  }
);

// Define association manually
User.associate = (models) => {
  User.hasMany(models.Cart, { foreignKey: "userId" });
};

module.exports = User;