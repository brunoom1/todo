/**
 * @jest-environment node
 */

const axios = require('axios');

test('deveria retornar os dados do usuário cadastrado', async (done) => {
  try {
    const userData = {
      name: "Gabriel Mendonça",
      email: "gabrielmendoncanf@gmail.com",
      password: '123456'
    };

    const response = await axios.post('http://localhost:3000/users', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    expect(response.status).toBe(201);
    expect(response.data).toEqual({
      ...userData, id: 1
    });

    done();
  } catch (err) {
    done(err);
  }

});