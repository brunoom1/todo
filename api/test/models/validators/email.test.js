
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

    const result = validator_email(email);

    if (result) {
      console.log(`email ${email} passou`);
    }

    expect(result).toBe(false);
  }
});


test('deveria retornar true para a lista de e-mails seguinte', () => {
  const emails_list = [
    'nome@email123.com.br',
    'g@gl.co'
  ];

  for (email of emails_list) {
    expect(validator_email(email)).toBe(true);
  }
});