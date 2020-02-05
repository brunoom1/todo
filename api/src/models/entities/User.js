const validate_name = require('models/validators/name.js');
const validate_password = require('models/validators/password.js');
const validate_email = require('models/validators/email.js');

class User {

  constructor(data = {}) {
    if (data.name) { this._name = data.name }
    if (data.email) { this._email = data.email }
    if (data.password) { this._password = data.password }
  }

  set name (name = "") {
    if (name.length === 0) {
      throw new Error("name is cant empty");
    }

    if (!validate_name(name)) {
      throw new Error("name is not valid");
    }

    this._name = name;
    return this;
  }

  set email (email) {
    if (!validate_email(email)) {
      throw new Error('malformed email');
    }

    this._email = email;
    return this;
  }

  set password (password) {
    if (password.length < 6) {
      throw new Error("min password length is 6");
    }

    if (!validate_password(password)) {
      throw new Error('password must consist of letters and numbers and a capital letter');
    }

    this._password = password;
    return this;
  }

  get name () {
    return this._name;
  }

  get email () {
    return this._email;
  }

  get password () {
    return this._password;
  }

  createList (data={}) {}
  showLists (filter = '') {}
  removeList (list) {}

}

module.exports = User;