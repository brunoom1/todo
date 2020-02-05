const name_validator = require('models/validators/name');

const names = [
  ...require('test/resources/list_names')
];

test('deveria retornar para verdadeiro todos os nomes', () => {
  for (name of names) {
    const result = name_validator(name);

    if (!result) { console.log(`${name} is invalid`) }

    expect(true).toBe(result);
  }
});

test('deveria retornar falso neste teste', () => {
  expect(false).toBe(name_validator("as989asdf"));
})