const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('./app');

const api = supertest(app)

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('blogs are returned as json and id exists', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    response.body.forEach((item) => {
        expect(item["_id"]).toBeDefined();
    })
})

test('HTTP Post to /api/blogs creates new record', async () => {
    const responseGetBeforePost = await api.get('/api/blogs')

    const lengthBeforePost = responseGetBeforePost.body.length;

    const responsePost = await api.post('/api/blogs')
        .send({ title: 'Tobi is free', author: 'Harry Potter', url: 'http://harry-potter.com', likes: 999 })
        .expect(201);

    const responseGetAfterPost = await api.get('/api/blogs');

    expect(lengthBeforePost).toBeLessThan(responseGetAfterPost.body.length);
})

test('verifies that likes by default to 0', async () => {
    const response = await api.get('/api/blogs');

    response.body.forEach((item) => {
        expect(item.likes).toBeDefined();
        expect(item.likes).toBeGreaterThanOrEqual(0);
    })
})

test('verifies that title and url properties are missing from the request and triggers 400 status code', async () => {
    const responsePost = await api.post('/api/blogs')
        .send({ author: 'Harry Potter', likes: 999 })
        .expect(400);
})

test('verifies that delete endpoint removes blogs correctly', async () => {
    const responseGetBeforeDelete = await api.get('/api/blogs');

    const responseGetLengthBeforeDelete = responseGetBeforeDelete.body.length;

    const responseDelete = await api.delete(`/api/blogs/${responseGetBeforeDelete.body[0]["_id"]}`)
        .expect(200);

    const responseGetAfterDelete = await api.get('/api/blogs');

    expect(responseGetLengthBeforeDelete).toBeGreaterThan(responseGetAfterDelete.body.length);
})

test('verifies that delete endpoint removes blogs correctly', async () => {
    const responseGetBeforeUpdate = await api.get('/api/blogs');

    const responseUpdate = await api.put(`/api/blogs/${responseGetBeforeUpdate.body[0]["_id"]}`)
        .send({ author: 'test', title: 'test', url: 'test', likes: '777' })
        .expect(200);

    const responseGetAfterUpdate = await api.get('/api/blogs');

    expect(responseGetAfterUpdate.body[0]).toEqual({
        author: 'test',
        title: 'test',
        url: 'test',
        likes: 777,
        __v: 0,
        _id: responseGetBeforeUpdate.body[0]["_id"]
    });
})

afterAll(() => {
    mongoose.connection.close()
})