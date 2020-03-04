var airwallex=require('../airwallex')
airwallex.chai.use(airwallex.chaiHttp)

describe("Swift code tests", function(){
    it('Payment type is SWIFT without swift code', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["PaymentSWIFT-NoSWIFTCode"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"'swift_code' is required when payment method is 'SWIFT'","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
    })

    it('Payment type is SWIFT with invalid swift code for US', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryUS-PaymentSWIFT-InvalidSWIFTCode"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"The swift code is not valid for the given bank country code: US","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
        
    })

    it('Payment type is SWIFT with invalid swift code for AU', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryAU-PaymentSWIFT-InvalidSWIFTCode"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"The swift code is not valid for the given bank country code: AU","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
    })

    it('Payment type is SWIFT with invalid swift code for CN', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryCN-PaymentSWIFT-InvalidSWIFTCode"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"The swift code is not valid for the given bank country code: CN","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
    })

    it('Payment type is SWIFT with invalid swift code length', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryCN-PaymentSWIFT-InvalidSWIFTCodeLength"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of 'swift_code' should be either 8 or 11","actual message:"+JSON.stringify(response.body))
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