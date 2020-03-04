var airwallex=require('../airwallex')
airwallex.chai.use(airwallex.chaiHttp)

describe("Country code tests", function(){

    it('Bank country is US', function(done) {
        airwallex.chai
            .request(airwallex.endpoint)
            .post('/bank')
            .set('content-type', 'application/json')
            .send(airwallex.jsondata["CountryUS"])
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    try{
                    airwallex.assert.equal(response.body.success,"Bank details saved","actual message:"+JSON.stringify(response.body))
                   done()
                }
                    catch(err)
                    {
                    done(err)
                    }
                }
            })
    })


    it('Bank country is CN', function(done) {
        airwallex.chai
            .request(airwallex.endpoint)
            .post('/bank')
            .set('content-type', 'application/json')
            .send(airwallex.jsondata["CountryCN"])
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    try{
                    airwallex.assert.equal(response.body.success,"Bank details saved","actual message:"+ JSON.stringify(response.body))
                   done()
                }
                    catch(err)
                    {
                    done(err)
                    }
                }
            })
           
    })

    it('Bank country is AU', function(done) {
        airwallex.chai
            .request(airwallex.endpoint)
            .post('/bank')
            .set('content-type', 'application/json')
            .send(airwallex.jsondata.CountryAU)
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    try{
                    airwallex.assert.equal(response.body.success,"Bank details saved","actual message:"+JSON.stringify(response.body))
                   done()
                }
                    catch(err)
                    {
                    done(err)
                    }
                }
            })
           
    })

    it('Bank country is UK', function(done) {
        airwallex.chai
            .request(airwallex.endpoint)
            .post('/bank')
            .set('content-type', 'application/json')
            .send(airwallex.jsondata["CountryUK"])
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    try{
                    airwallex.assert.equal(response.body.error,"'bank_country_code' is required, and should be one of 'US', 'AU', or 'CN'","actual message:"+JSON.stringify(response.body))
                   done()
                }
                    catch(err)
                    {
                    done(err)
                    }
                }
            })
           
    })

    it('No Country Code', function(done) {
        airwallex.chai
            .request(airwallex.endpoint)
            .post('/bank')
            .set('content-type', 'application/json')
            .send(airwallex.jsondata["NoCountry"])
            .end(function(error, response) {
                if (error) {
                    done(error);
                } else {
                    try{
                    airwallex.assert.equal(response.body.error,"'bank_country_code' is required, and should be one of 'US', 'AU', or 'CN'","actual message:"+JSON.stringify(response.body))
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