const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect;

chai.use(chaiHttp)

describe('Test Server', () => {
    beforeEach(() => {
        server = require('../src/index')
    })
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