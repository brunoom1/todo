/**
 * @jest-environment node
 */

const axios = require('axios');

test('deve retornar 201 e uma message ok', async (done) => {
  try {
    const response = await axios.get("http://localhost:3000/test");
    expect(response.status).toBe(201);
    expect(response.data).toEqual({message: "ok"});

    done();
  } catch(err){
    done(err);
  }

});