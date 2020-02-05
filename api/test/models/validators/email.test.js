
const validator_email = require('models/validators/email');

test ('deveria retornar false para o teste', () => {
  const emails_list = [
    'gabriel.com.br',
    'van@',
    '@asd.com.br',
    '123@23434',
    'asdfas@123kjkasdf',
    'as234@-lkjlkasdf'
  ];

  for (email of emails_list) {
    expect(validator_email(email)).toBe(false);
  }
});