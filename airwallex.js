 module.exports = {
     filename: process.env.NODE_ENV,
     expect: require('chai').expect,
     assert: require('assert'),
     jsondata: require(require('./config/'+process.env.NODE_ENV).datapath),
     endpoint:require('./config/'+process.env.NODE_ENV).endpoint ,
     fetch:require('node-fetch'),
     chai:require('chai'),
     chaiHttp:require('chai-http')
}