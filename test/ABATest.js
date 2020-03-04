var airwallex=require('../airwallex')
airwallex.chai.use(airwallex.chaiHttp)

describe("ABA Tests", function(){

    it('Bank country is US with Invalid ABA', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryUS-InvalidABA"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of 'aba' should be 9","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
       
    })

    it('Bank country is US with no ABA', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryUS-NoABA"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                    airwallex.assert.equal(response.body.error,"'aba' is required when bank country code is 'US'","actual message:"+JSON.stringify(response.body))
                    done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
       
    })

})