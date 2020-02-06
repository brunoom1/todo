const userController = require('controller/User');

module.exports = app => {

  app.get('/test', function (req, res) {
    res.status(201).send(JSON.stringify({
      'message': 'ok'
    }));
  });

  app.post('/users', userController.create);

};