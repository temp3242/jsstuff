const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect;

chai.use(chaiHttp)

describe('GET to "server"', () => {
    it('should return a 200(ok)', (done) => {
        server = require('../src/index')
        chai.request('http://localhost:5000')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200)
                done();
            })
    })
})