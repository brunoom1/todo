const database = require('config/database');

test('deveria retornar true para o teste do banco', async () => {
  try {
    const result = await database('test').status();
    expect(result).toBe(true);    
  } catch (e) {
    expect(e).not.toThrow();    
  }
});

test('deveria retornar true para o teste do banco develop', async () => {
  try {
    const result = await database('develop').status();
    expect(result).toBe(true);    
  } catch (e) {
    expect(e).not.toThrow();    
  }
});

test('deveria retornar true para o teste do banco production', async () => {
  try {
    const result = await database('production').status();
    expect(result).toBe(true);    
  } catch (e) {
    expect(e).not.toThrow();    
  }
});
