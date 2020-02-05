require ("dotenv").config();
const Sequelize = require('sequelize');

module.exports = (env) => {

  if (env === 'develop') {

    let sequelize = null;

    const DB_ADAPTER = process.env.DB_DEV_ADAPTER;
    const DB_NAME = process.env.DB_DEV_NAME;

    if (DB_ADAPTER === 'sqlite') {
      sequelize = new Sequelize({
        dialect: DB_ADAPTER,
        storage: DB_NAME
      });
    }

    const database = {
      sequelize,
      async status () {
        try {
          await this.sequelize.authenticate();
          return true;
        } catch (e) {
          throw e;
        }
      }
    }

    return database;
  }


  if (env === 'production') {

    let sequelize = null;

    const DB_ADAPTER = process.env.DB_DEV_ADAPTER;
    const DB_NAME = process.env.DB_NAME;

    if (DB_ADAPTER === 'sqlite') {
      sequelize = new Sequelize({
        dialect: DB_ADAPTER,
        storage: DB_NAME
      });
    }

    const database = {
      sequelize,
      async status () {
        try {
          await this.sequelize.authenticate();
          return true;
        } catch (e) {
          throw e;
        }
      }
    }

    return database;
  }


  if (env === 'test') {

    let sequelize = null;

    const DB_ADAPTER = process.env.DB_DEV_ADAPTER;
    const DB_NAME = process.env.DB_TEST_NAME;

    if (DB_ADAPTER === 'sqlite') {
      sequelize = new Sequelize({
        dialect: DB_ADAPTER,
        storage: DB_NAME
      });
    }

    const database = {
      sequelize,
      async status () {
        try {
          await this.sequelize.authenticate();
          return true;
        } catch (e) {
          throw e;
        }
      }
    }

    return database;
  }    

}