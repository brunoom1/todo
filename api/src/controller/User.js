const UserEntity = require("models/entities/User");
const UserTable = require('models/tables/user');

module.exports = {
  create: (request, response) => async {
    const data = request.body;

    const user = new UserEntity(data);
    const result = await UserTable().save(user);    

    response.status(201).send(result);
  }
};