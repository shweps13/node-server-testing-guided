const request = require('supertest');

const server = require('./server.js');

describe('GET /', () => {
    // should return http 200 ok
    it('should return 200 http status code', () => {
        return request(server)
        .get('/')
        .then(response => {
            expect(response.status).toBe(200);
        })
    })
  
    // should return json
    it('should return a JSON object fron the index route', async () => {
        const response = await request(server).get('/');
        
        expect(response.type).toEqual('application/json');
    });
    
    // should return an object with an up api property with the value 'up'

    it('should return a JSON object fron the index route', async () => {
        const expectedBody = { api: 'up' };
    
        const response = await request(server).get('/');
    
        expect(response.body).toEqual(expectedBody);
        });
})