const request = require('supertest');
const app = require('../app');

describe('Calculator operations', () => {
    test('Addition of 1 and 2 should return 3', async () => {
        const res = await request(app).get('/add?a=1&b=2');
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toEqual(3);
    });

    test('Subtraction of 5 and 3 should return 2', async () => {
        const res = await request(app).get('/subtract?a=5&b=3');
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toEqual(2);
    });

    test('Multiplication of 3 and 4 should return 12', async () => {
        const res = await request(app).get('/multiply?a=3&b=4');
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toEqual(12);
    });

    test('Division of 10 by 2 should return 5', async () => {
        const res = await request(app).get('/divide?a=10&b=2');
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toEqual(5);
    });

    test('Division by zero should return error', async () => {
        const res = await request(app).get('/divide?a=10&b=0');
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toEqual('Cannot divide by zero');
    });
});
