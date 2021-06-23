/* eslint no-undef: 0, "no-unused-vars": 0*/

import chai from 'chai';
import chaiHttp  from 'chai-http';
import app from '../src/index.js';

const expect = chai.expect;

chai.use(chaiHttp)

process.env.NODE_ENV = 'development'

describe('Test Server', () => {
    it('/ should return 200', (done) => {
        chai.request('http://localhost:5000')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    })
    it('/ham should return 200', (done) => {
        chai.request('http://localhost:5000')
            .get('/ham')
            .end((err,res) => {
                expect(res).to.have.status(200);
                done();
            })
    })
    it('anything else should return 404', (done) => {
        chai.request('http://localhost:5000')
            .get('/foo/bar/baz')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            })
    })
})