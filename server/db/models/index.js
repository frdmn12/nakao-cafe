// db/models/index.js
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.js')[env];

let sequelizeInstance;
if (config.use_env_variable) {
  sequelizeInstance = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelizeInstance = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};

// Import model
const User = require('./user')(sequelizeInstance, Sequelize.DataTypes);
const Product = require('./product')(sequelizeInstance, Sequelize.DataTypes);
const Cart = require('./cart')(sequelizeInstance, Sequelize.DataTypes);
const Order = require('./order')(sequelizeInstance, Sequelize.DataTypes);
// const OrderDetail = require('./orderDetail')(sequelizeInstance, Sequelize.DataTypes);

// Add models to db object
db.User = User;
db.Product = Product;
db.Cart = Cart;
db.Order = Order;

// Import all models from the models directory
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelizeInstance, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Set up associations (relationships) between models
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

module.exports = db;