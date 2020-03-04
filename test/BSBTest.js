var airwallex=require('../airwallex')
airwallex.chai.use(airwallex.chaiHttp)

describe("BSB details tests", function(){
    it('Bank country is AU with Invalid BSB', function(done) {

        console.log("RONALDOASDFASDFSDFSADFASDFSDFASDFSDFSDFSADFSFDSDFSADFSDFSDFSDFSADFSAFASFSDFASFSADF",airwallex.jsondata["NoPaymentCode"])
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryAU-InvalidBSB"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of 'bsb' should be 6","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
       
    })

    it('Bank country is AU with no BSB', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryAU-NoBSB"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"'bsb' is required when bank country code is 'AU'","actual message:"+JSON.stringify(response.body))
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

