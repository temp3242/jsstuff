let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../main')
let should = chai.should()

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