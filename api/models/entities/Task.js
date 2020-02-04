class Task {

  constructor () {
    this.list = null;
    this.STATUS_OPEN = 'open';
    this.STATUS_DOING = 'doing'
  }
.
  setList(list) {}
  getList() {}

  start () {}
  pause () {}
  done () {}
}

module.exports = Task;