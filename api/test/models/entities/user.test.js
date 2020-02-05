const User = require('models/entities/User.js');

const userData = {
  name: 'Gabriel Mendonça',
  email: 'gabrielmendoncanf@gmail.com',
  password: '123456'
};


test("deveria criar um novo usuário", () => {

  const user = new User(userData);

  expect({
    name: user.name,
    email: user.email,
    password: user.password
  }).toEqual(userData)
});

const add_password = (pass) => {
  return () => {
    const user = new User();
    user.password = pass;
  }
};

test("deveria retornar exception por senha pequena", () => {
  expect(add_password('12345')).toThrow('min password length is 6');
});

test("deveria retornar erro no padrão da senha", () => {
  expect(add_password('123456')).toThrow('password must consist of letters and numbers and a capital letter')
});

const add_name = (name) => {
  return () => {
    const user = new User();
    user.name = name;    
  }
}

test("deve retornar uma exception por nome vasio", () => {
  expect(add_name("")).toThrow('name is cant empty')
});

test("deveria retornar uma exception por não ser alpha numérico", () => {
  expect(add_name("Gabriel 123")).toThrow('name is not valid')
})

const add_email = (email) => {
  return () => {
    const user = new User();
    user.email = email;    
  }
}

test("deveria retornar exception por não conter o formato correto de e-mail", () => {
  expect(add_email('gabriel@1234')).toThrow('malformed email');
});