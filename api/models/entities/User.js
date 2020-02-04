class User {

  constructor(data = {}) {
    this.name = data.name;
    this.email = data.email;
    this.senha = data.senha;
  }

  createList (data={}) {}
  showLists (filter = '') {}
  removeList (list) {}

}

module.exports = User;