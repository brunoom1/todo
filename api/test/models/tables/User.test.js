const UserEntity = require('models/entities/User');
const UserTable = require('models/tables/user');
const database = require('config/database.js');

test('deveria retornar sucesso ao adicionar usuário', async () => {
  try {

    const db = database('test');

    const userEntity = new UserEntity({
      name: 'Gabriel Mendonça',
      email: 'gabrielmendoncanf@gmail.com',
      password: '123Abc'
    });

    const table = UserTable(db.sequelize);
    await table.model.truncate(); 

    const result = await table.save(userEntity);

    expect(result.id > 0).toBe(true);
  } catch (e) {
    expect(e).not.toThrow();
  }
});

test('naõ deve ser possível adicionar dois usuários com mesmo e-mail', (done) => {
  const db = database('test');

  const userEntity = new UserEntity ({
    name: 'Gabriel Mendonça',
    email: 'gabrielmendoncanf@gmail.com',
    password: '123Abc'      
  })

  const table = UserTable(db.sequelize);

  const promise = Promise.all(
    [
      table.model.truncate(),
      table.save(userEntity),
      table.save(userEntity) 
    ]
  );

  promise.then(() => {
    expect(1).toBe(2);
    done();
  }).catch(err => {
    done();
    expect(1).toBe(1);
  });

  return promise;
});
