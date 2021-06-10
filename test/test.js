const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../src/index')
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
describe('test parsing', () => {
    it('should return some data', (done) => {
        async () => {
            var data = await require('../getdxdata')()
            expect(data[0]).to.not.be.undefined; 
        }
        done();
    })
})