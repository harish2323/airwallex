var airwallex=require('../airwallex')
airwallex.chai.use(airwallex.chaiHttp)

describe("Payment code tests", function(){

    it('Invalid Payment Code', function(done) {
        airwallex.chai
            .request(airwallex.endpoint)
            .post('/bank')
            .set('content-type', 'application/json')
            .send(airwallex.jsondata["InvalidPaymentCode"])
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    try{
                    airwallex.assert.equal(response.body.error,"'payment_method' field required, the value should be either 'LOCAL' or 'SWIFT'","actual message:"+JSON.stringify(response.body))
                   done()
                }
                    catch(err)
                    {
                    done(err)
                    }
                }
            })
    })

    it('No Payment Code', function(done) {
        airwallex.chai
            .request(airwallex.endpoint)
            .post('/bank')
            .set('content-type', 'application/json')
            .send(airwallex.jsondata["NoPaymentCode"])
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    try{
                    airwallex.assert.equal(response.body.error,"'payment_method' field required, the value should be either 'LOCAL' or 'SWIFT'","actual message:"+JSON.stringify(response.body))
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