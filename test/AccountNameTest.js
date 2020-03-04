var airwallex=require('../airwallex')
airwallex.chai.use(airwallex.chaiHttp)

describe("Account Name tests", function(){
    it('Bank country is CN with no account name', function(done) {

        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryCN-NoAccountName"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                    console.log("DATATATA")

                airwallex.assert.equal(response.body.error,"'account_name' is required","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
       
    })

    it('Bank country is US with invalid account name (lenght:>10)', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryUS-InvalidAccountName"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of account_name should be between 2 and 10","actual message:"+JSON.stringify(response.body))
               done()
            }
                catch(err)
                {
                done(err)
                }
            }
        })
       
    })

    it('Bank country is AU with invalid account name (lenght:<2)', function(done) {
        airwallex.chai
        .request(airwallex.endpoint)
        .post('/bank')
        .set('content-type', 'application/json')
        .send(airwallex.jsondata["CountryAU-InvalidAccountName"])
        .end(function(error, response) {
            if (error) {
                done(error);
            } else {
                try{
                airwallex.assert.equal(response.body.error,"Length of account_name should be between 2 and 10","actual message:"+JSON.stringify(response.body))
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