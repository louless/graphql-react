'use strict';

const request = require('superagent');
const expect = require('chai').expect;
const assert = require('chai').assert;
const describe = require('mocha').describe;
const login = require("./login.js");
const skip = require('mocha').skip;


describe('etsmarketdataTest.js: ', () => {

    const RNDM = Math.round(Math.random() * 1000);

    // login first
    beforeEach(() => {
        return login.doLogin().then(sc => {
            this.sessionCookies = sc;
        });
    });                 
    
    const baseUrl = "http://testui.marx.tech:8080/etsmarketdata/";
    
        describe.skip('GET (unused) ' + baseUrl + "rest/routes/{symbol}/all", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/{symbol}/all")
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
                    });
            });
        });
        describe.skip('GET (unused) ' + baseUrl + "rest/routes/{symbol}/permitted", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/routes/{symbol}/permitted")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        console.log('Parsed body: ');
                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
                    });
            });
        });
        describe('POST ' + baseUrl + "rest/routes/carriers/add", () => {
            it('responds status 204, response is empty', () => {
                 return request.post(baseUrl + "rest/routes/carriers/add")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .set('Content-Type', 'application/json')
                    .send("CARR" + RNDM)
                    .then(( res ) => {
                        console.log("Carrier name: ");
                        console.log("CARR"+RNDM);
                        expect(res.body).to.be.empty;
                        expect(res.status).to.equal(204);
                    });
            });
        });
        describe('POST ' + baseUrl + "rest/routes/suppliers/add", () => {
            it('responds status 204, response is empty', () => {
                 return request.post(baseUrl + "rest/routes/suppliers/add")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .set('Content-Type', 'application/json')
                    .send("SUPP" + RNDM)
                    .then(( res ) => {
                        console.log("Supplier name: ");
                        console.log("SUPP" + RNDM);
                        expect(res.body).to.be.empty;
                        expect(res.status).to.equal(204);
                    });
            });
        });
        describe('POST ' + baseUrl + "rest/routes/levels/add", () => {
            const level = {carrier:"CARR"+RNDM,supplier:"SUPP"+RNDM,levelID:1};
            it('responds status 204, response is empty', () => {
                 return request.post(baseUrl + "rest/routes/levels/add")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .set('Content-Type', 'application/json')
                    .send(level)
                    .then(( res ) => {
                        console.log("Level: ");
                        console.log(level);
                        expect(res.body).to.be.empty;
                        expect(res.status).to.equal(204);
                    });
            });
        });
        describe('POST ' + baseUrl + "rest/routes/add", () => {
            const route = {subtopic:"feedhandler:8787",
                           carrier:"CARR"+RNDM,
                           supplier:"SUPP"+RNDM,
                           levelID:1,
                           marketid:1,
                           protocol:"com.tradedesksoftware.feedhandler.feed.tcp.MarxFeed"
                          };
            it('responds status 204, response is empty', () => {
                 return request.post(baseUrl + "rest/routes/add")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .set('Content-Type', 'application/json')
                    .send(route)
                    .then(( res ) => {
                        console.log("Route: ");
                        console.log(JSON.stringify(route));
                        expect(res.body).to.be.empty;
                        expect(res.status).to.equal(204);
                    });
            });
        });
        describe('POST ' + baseUrl + "rest/routes/carrierexchanges/add", () => {
            const carrEx = {carrier:"CARR"+RNDM,
                           exchangeID:1,
                           feedID:null
                          };
            it('responds status 204, response is empty', () => {
                 return request.post(baseUrl + "rest/routes/carrierexchanges/add")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .set('Content-Type', 'application/json')
                    .send(carrEx)
                    .then(( res ) => {
                        console.log("Carrier: ");
                        console.log(JSON.stringify(carrEx));
                        expect(res.body).to.be.empty;
                        expect(res.status).to.equal(204);
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/all/permitted", () => {                                        
            it('responds status 200, response is array', () => {
                 return request.get(baseUrl + "rest/routes/all/permitted")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "rest/routes/carrierexchanges/list", () => {                                        
            it('responds status 200, response is array', () => {
                 return request.get(baseUrl + "rest/routes/carrierexchanges/list")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
//                        console.log('Parsed body: ');
//                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
                        expect(res.body).to.be.a('array');
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
//                        console.log('Parsed body: ');
//                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('DELETING', ()=> {
            describe('POST ' + baseUrl + "rest/routes/delete", () => {
                const route = {subtopic:"feedhandler:8787",
                               carrier:"CARR"+RNDM,
                               supplier:"SUPP"+RNDM,
                               levelID:1,
                               marketid:1,
                               protocol:"com.tradedesksoftware.feedhandler.feed.tcp.MarxFeed"
                              };
                it('responds status 204, response is empty', () => {
                     return request.post(baseUrl + "rest/routes/delete")
                        .redirects(0)
                        .set('Cookie', this.sessionCookies)
                        .set('Content-Type', 'application/json')
                        .send(route)
                        .then(( res ) => {
                            console.log("Route for delete: ");
                            console.log(JSON.stringify(route));
                            console.log(res.text);
                            expect(res.body).to.be.empty;
                            expect(res.status).to.equal(204);
                        });
                });
            });
            describe('POST ' + baseUrl + "rest/routes/carrierexchanges/delete", () => {
                const carrEx = {carrier:"CARR"+RNDM,
                               exchangeID:1,
                               feedID:null
                              };
                it('responds status 204, response is empty', () => {
                     return request.post(baseUrl + "rest/routes/carrierexchanges/delete")
                        .redirects(0)
                        .set('Cookie', this.sessionCookies)
                        .set('Content-Type', 'application/json')
                        .send(carrEx)
                        .then(( res ) => {
                            console.log("Carrierexchange for delete: ");
                            console.log(carrEx);
                            expect(res.body).to.be.empty;
                            expect(res.status).to.equal(204);
                        });
                });
            });
            describe('POST ' + baseUrl + "rest/routes/levels/delete", () => {
                const level = {carrier:"CARR"+RNDM,supplier:"SUPP"+RNDM,levelID:1};
                it('responds status 204, response is empty', () => {
                     return request.post(baseUrl + "rest/routes/levels/delete")
                        .redirects(0)
                        .set('Cookie', this.sessionCookies)
                        .set('Content-Type', 'application/json')
                        .send(level)
                        .then(( res ) => {
                            console.log("Level: ");
                            console.log(level);
                            expect(res.body).to.be.empty;
                            expect(res.status).to.equal(204);
                        });
                });
            });
            describe('POST ' + baseUrl + "rest/routes/carriers/delete", () => {
                it('responds status 204, response is empty', () => {
                     return request.post(baseUrl + "rest/routes/carriers/delete")
                        .redirects(0)
                        .set('Cookie', this.sessionCookies)
                        .set('Content-Type', 'application/json')
                        .send("CARR"+RNDM)
                        .then(( res ) => {
                            console.log("Carrier name for deleting: ");
                            console.log("CARR"+RNDM);
                            expect(res.body).to.be.empty;
                            expect(res.status).to.equal(204);
                        });
                });
            });
            describe('POST ' + baseUrl + "rest/routes/suppliers/delete", () => {
            it('responds status 204, response is empty', () => {
                 return request.post(baseUrl + "rest/routes/suppliers/delete")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .set('Content-Type', 'application/json')
                    .send("SUPP"+RNDM)
                    .then(( res ) => {
                        console.log("Supplier: ");
                        console.log("SUPP"+RNDM);
                        expect(res.body).to.be.empty;
                        expect(res.status).to.equal(204);
                    });
            });
        });
        });
        describe('GET ' + baseUrl + "rest/routes/levels/list", () => {                                        
            it('responds status 200, response is array', () => {
                 return request.get(baseUrl + "rest/routes/levels/list")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe.skip('GET (unused)' + baseUrl + "rest/routes/search", () => {
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
        describe('GET ' + baseUrl + "rest/routes/suppliers/list", () => {                                        
            it('responds status 200, response is array', () => {
                 return request.get(baseUrl + "rest/routes/suppliers/list")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
//                        console.log('Parsed body: ');
//                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
                        expect(res.body).to.be.a('array');
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
        describe('GET ' + baseUrl + "rest/symbols/carrier/{carrierID}/{instrumentID}/{carrierSymbol}", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/carrier/{carrierID}/{instrumentID}/{carrierSymbol}")
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
        describe.skip('POST ' + baseUrl + "rest/symbols/delete", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/delete")
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
        describe('GET ' + baseUrl + "rest/symbols/destination/{destid}", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/destination/1")
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
        describe('GET ' + baseUrl + "rest/symbols/destination/{destid}/{instrumentID}/{destSymbol}", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/destination/{destid}/{instrumentID}/{destSymbol}")
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
        describe.skip('POST ' + baseUrl + "rest/symbols/destination/saveMultiple", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/destination/saveMultiple")
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
        describe('GET ' + baseUrl + "rest/symbols/exchange/1", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/exchange/1")
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
        describe('GET ' + baseUrl + "rest/symbols/exchange/1/{carrier}", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/exchange/1/1")
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
        describe.skip('POST ' + baseUrl + "rest/symbols/search", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/search")
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
        describe.skip('POST ' + baseUrl + "rest/symbols/update", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/update")
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
        describe.skip('POST ' + baseUrl + "rest/symbols/carrier/saveMultiple", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/symbols/carrier/saveMultiple")
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
        describe('GET ' + baseUrl + "rest/markups/1", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/markups/1")
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
        describe('GET ' + baseUrl + "rest/exchanges/{symbol}", () => {
            it('responds status 200, response is array', () => {
                 return request.get(baseUrl + "rest/exchanges/{symbol}")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
//                        console.log('Parsed body: ');
//                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe.skip('POST ' + baseUrl + "rest/exchanges/clone", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/exchanges/clone")
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
        describe.skip('POST ' + baseUrl + "rest/exchanges/update", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/exchanges/update")
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
        describe('GET ' + baseUrl + "rest/exchanges/all", () => {
            it('responds status 200, response is array', () => {
                 return request.get(baseUrl + "rest/exchanges/all")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
//                        console.log('Parsed body: ');
//                        console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe.skip('POST ' + baseUrl + "rest/exchanges/delete", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/exchanges/delete")
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
        describe.skip('POST ' + baseUrl + "rest/markups/update", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "rest/markups/update")
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
    