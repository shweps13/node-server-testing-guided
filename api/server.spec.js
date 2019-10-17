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
    test('should return JSON', async () => {
        const response = await request(server).get('/');
        // toMatch uses a regular expression to check the value
        expect(response.type).toMatch(/json/i);
    });

    // should return json
    it('should return a JSON object', async () => {
        const response = await request(server).get('/');
        
        // toMach uses a regexp to check the values

        expect(response.type).toMatch(/json/i);
    });

    // should return an object with an up api property with the value 'up'

    it('should return { api: "up"} ', async () => {    
        const response = await request(server).get('/');
    
        expect(response.body).toEqual({ api: 'up' });
        });


    it('toEqual', () => {
    expect({}).toEqual({});
    expect([]).toEqual([]);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    });

    })