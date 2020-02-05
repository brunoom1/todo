'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return {
    model: User,
    async save (UserEntity) {

      const result = await User.create({
        name: UserEntity.name,
        email: UserEntity.email,
        password: UserEntity.password
      });

      return result;
    }
  };
};