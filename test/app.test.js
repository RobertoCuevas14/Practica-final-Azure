const request = require('supertest');
const app = require('../app'); // Ajusta la ruta según tu estructura de carpetas
const expect = require('chai').expect;

describe('GET /', function () {
  it('Debería devolver el mensaje "¡Hola, mundo!"', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) 
           { if (err) return done(err);
        expect(res.text).to.equal('¡Hola, mundo!');
        done();
        
      });
  });
});
