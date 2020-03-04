var airwallex=require('../airwallex')
airwallex.chai.use(airwallex.chaiHttp)

describe("Account number tests", function(){
    it('No account number for code US', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryUS-NoAccountNumber"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"'account_number' is required","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
    })

    it('Invalid account number for code US(length: >17)', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryUS-InvalidAccountNumber"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of account_number should be between 1 and 17 when bank_country_code is 'US'","actual message:"+JSON.stringify(response.body))
                done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
    })

    it('Invalid account number for code AU(lenght: < 6)', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryAU-InvalidAccountNumber"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of account_number should be between 6 and 9 when bank_country_code is 'AU'","actual message:"+JSON.stringify(response.body))
                done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
    })

    it('Invalid account number for code CN(length: 7)', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryCN-InvalidAccountNumber"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of account_number should be between 8 and 20 when bank_country_code is 'CN'","actual message:"+JSON.stringify(response.body))
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