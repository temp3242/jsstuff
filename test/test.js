const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
const should = chai.should()

chai.use(chaiHttp)

describe('GET to "server"', () => {
    it('should return a 200(ok)', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
            done();    
            })
    })
})