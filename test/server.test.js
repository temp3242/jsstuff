/* eslint no-undef: 0, "no-unused-vars": 0*/

import chai from 'chai';
import chaiHttp  from 'chai-http';
import app from '../src/index.js';
import DX from '../src/getdxdata.js';
import weather from '../src/weather.js';

const expect = chai.expect;

chai.use(chaiHttp)

process.env.NODE_ENV = 'development'

describe('Test Get Data', () => {
    it('All values from DX should be strings', (done) => {
        DX().then(res => {
            res.forEach(value => expect(value).to.be.a('string'));
            done();
        })
    })
    it('All values from weather should be numbers', (done) => {
        weather().then(res => {
            Object.values(res.main).forEach(value => expect(value).to.be.a('number'))
            done();
        })
    })
})

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
    it('/weather should return 200', (done) => {
        chai.request('http://localhost:5000')
            .get('/weather')
            .end((err,res) => {
                expect(res).to.have.status(200);
                done();
            })
    })

    it('/threed should return 200', (done) => {
        chai.request('http://localhost:5000')
        .get('/threed')
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