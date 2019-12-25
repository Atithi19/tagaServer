const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "customer",
  {
    name: {
      type: Sequelize.STRING,
    },
    cusId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    phno: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);