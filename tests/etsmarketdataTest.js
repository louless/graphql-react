'use strict';

const request = require('superagent');
const expect = require('chai').expect;
const assert = require('chai').assert;
const describe = require('mocha').describe;
const login = require("./login.js");
const skip = require('mocha').skip;


describe('etsmarketdataTest.js: ', () => {
    
    const calls = [
//        "rest/routes/{symbol}/all",
//        "rest/routes/{symbol}/permitted",
// post   "rest/routes/add",
//        "rest/routes/all/permitted"
//        "rest/routes/carrierexchanges/delete",  POST
//        "rest/routes/carrierexchanges/list",
//   POST "rest/routes/carrierexchanges/add    POST
//        "rest/routes/carriers/add",  POST
//        "rest/routes/carriers/delete",  POST
//        "rest/routes/carriers/list",
//        "rest/routes/delete",  POST
//        "rest/routes/levels/add",  POST
//        "rest/routes/levels/delete",  POST
//        "rest/routes/levels/list",  POST
//        "rest/routes/search",
//        "rest/routes/suppliers/add",  POST
//        "rest/routes/suppliers/delete",  POST
//        "rest/routes/suppliers/list",
//        "rest/symbols/all",  POST
//        "rest/symbols/carrier/{carrierID}/{instrumentID}/{carrierSymbol}",
//   post "rest/symbols/delete",  POST
//        "rest/symbols/destination/{destid}",
//        "rest/symbols/destination/{destid}/{instrumentID}/{destSymbol}",
//        "rest/symbols/destination/saveMultiple",  POST
//        "rest/symbols/exchange/{exchangeid}",
//        "rest/symbols/exchange/{exchangeid}/{carrier}",
//        "rest/symbols/search",  POST
//        "rest/symbols/update",  POST
//   post /rest/symbols/carrier/saveMultiple  POST
///        rest/markups/{marketid}
///        rest/exchanges/{symbol}
//POST     /rest/exchanges/clone  POST
// POST    /rest/exchanges/update  POST
//         /rest/exchanges/all
// POST    /rest/exchanges/delete    POST
//  POST   /rest/markups/update  POST
    ];
    
    // login first
    beforeEach(() => {
        return login.doLogin().then(sc => {
            this.sessionCookies = sc;
        });
    });                 
    
    const baseUrl = "http://stagging.marx.tech:8080/etsmarketdata/";        

    var restUrl = 'empty URL';
    
        restUrl = baseUrl + "rest/routes/{symbol}/all";
        describe.skip('GET possible do not use ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/{symbol}/permitted";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/add";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/all/permitted", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/all/permitted")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "routes/carrierexchanges/delete";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/carrierexchanges/list", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/carrierexchanges/list")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "/rest/routes/carrierexchanges/add";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/carriers/add";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/carriers/delete";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/carriers/list", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/carriers/list")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/delete";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/levels/add";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/levels/delete";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/levels/list", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/levels/list")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/search", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/search")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/suppliers/add";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/routes/suppliers/delete";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/suppliers/list", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/suppliers/list")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe.skip('POST ' + baseUrl + "rest/symbols/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/all")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/carrier/{carrierID}/{instrumentID}/{carrierSymbol}";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/delete";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/destination/{destid}";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/destination/{destid}/{instrumentID}/{destSymbol}";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/destination/saveMultiple";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/exchange/{exchangeid}";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/exchange/{exchangeid}/{carrier}";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/search";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/update";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/symbols/carrier/saveMultiple";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/markups/{marketid}";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/exchanges/{symbol}";
        describe('GET ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "/rest/exchanges/clone";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "/rest/exchanges/update";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "/rest/exchanges/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/exchanges/all")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/exchanges/delete";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        restUrl = baseUrl + "rest/markups/update";
        describe.skip('POST ' + restUrl, () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(restUrl)
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });        

});
    
