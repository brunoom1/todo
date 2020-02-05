const validator_password = require('models/validators/password');


test ("deveria retornar false para as senhas em questão", () => {
  const passwords = [
    "abs1234", "ABC123"
  ]

  for(password of passwords) {
    expect(validator_password(password)).toBe(false);
  }
});


test ("deveria retornar true para as senhas em questão", () => {
  const passwords = [
    "abs1234Abc", "ABC123a"
  ]

  for(password of passwords) {
    expect(validator_password(password)).toBe(true);
  }
});