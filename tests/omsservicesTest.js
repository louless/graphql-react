'use strict';

const request = require('superagent');
const expect = require('chai').expect;
const assert = require('chai').assert;
const describe = require('mocha').describe;
const login = require("./login.js");
const skip = require('mocha').skip;


describe('Test file omsservices.js', function () {
    
    // login first
    beforeEach(() => {
        return login.doLogin().then(sc => {
            this.sessionCookies = sc;
        });
    });


    // login first
//    (function(){
//        return login.doLogin().then(sc => {
//            this.sessionCookies = sc;
//        });
//    })();

    const baseUrl = "http://testui.marx.tech:8080/omsrestservices";


        describe('GET ' + baseUrl + "/rest/accounts", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/accounts")
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
        describe('GET ' + baseUrl + "/rest/accounts/1", () => {
            it('responds status 200, response is always empty, do we need that call?', () => {
                 return request.get(baseUrl + "/rest/accounts/1")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
//                    .set('Accept', 'application/json')
                    .then(( res ) => {
                        console.log("Body as strings: ");
                        console.log(JSON.stringify(res.body));
//                         console.log('Parsed body: ');
//                         console.log(res.body);
                        expect(res.body).not.to.be.empty;
                        expect(res.status).to.equal(200);
//                        expect(res.body).to.be.a('array');
                    });
            });
        });
        describe('GET ' + baseUrl + "/rest/accounts/1/adjustments", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/accounts/1/adjustments")
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
        describe.skip('POST ' + baseUrl + "/rest/accounts/(id)/delete", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/accounts/(id)/deleteadjustments", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/accounts/1/markets", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/accounts/1/markets")
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
        describe('GET ' + baseUrl + "/rest/accounts/1/positions", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/accounts/1/positions")
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
        describe.skip('POST ' + baseUrl + "/rest/accounts/(id)/retireTickets", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/accounts/adjustments/new", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/accounts/new", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/companies/1/accounts", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/1/accounts")
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
        describe('GET ' + baseUrl + "/rest/delayedbbookgenerator/(modulename)/defaultholdtime", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/delayedbbookgenerator/(modulename)/defaultholdtime")
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
        describe('GET ' + baseUrl + "/rest/delayedbbookgenerator/(modulename)/groupDestMap", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/delayedbbookgenerator/(modulename)/groupDestMap")
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
        describe('GET ' + baseUrl + "/rest/delayedbbookgenerator/(modulename)/groupholdtimes", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/delayedbbookgenerator/(modulename)/groupholdtimes")
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
        describe.skip('POST ' + baseUrl + "/rest/delayedbbookgenerator/destholdtimes", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/delayedbbookgenerator/groupDestMap", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/delayedbbookgenerator/groupholdtimes", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/delayedbbookgenerator/defaultholdtime", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/destinations/1", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/destinations/1")
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
        describe('GET ' + baseUrl + "/rest/destinations/all", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/destinations/all")
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
        describe('GET ' + baseUrl + "/rest/destinations/info", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/destinations/info")
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
        describe('GET ' + baseUrl + "/rest/destinations/info/1", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/destinations/info/1")
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
        describe('GET ' + baseUrl + "/rest/destinations/info/company/1", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/destinations/info/company/1")
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
        describe.skip('POST ' + baseUrl + "/rest/destinations/info/save", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/destinations/info/user", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/destinations/info/user")
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
        describe('GET ' + baseUrl + "/rest/destinations/markets/all", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/destinations/markets/all")
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
        describe.skip('POST ' + baseUrl + "/rest/destinations/save", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/earproperties", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/earproperties")
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
        describe.skip('POST ' + baseUrl + "/rest/findAccounts", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/findOrders", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/gateways/1/usergatewaycredentials", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/gateways/1/usergatewaycredentials")
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
        describe.skip('POST ' + baseUrl + "/rest/gateways/usergatewaycredentials", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/gateways/usergatewaycredentials")
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
        describe('GET ' + baseUrl + "/rest/greylabels", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels")
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
        describe('GET ' + baseUrl + "/rest/greylabels/accounts/1/balance", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels/accounts/1/balance")
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
        describe('GET ' + baseUrl + "/rest/greylabels/accounts/1/buyingPower", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels/accounts/1/buyingPower")
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
        describe('GET ' + baseUrl + "/rest/greylabels/accounts/1/equity", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels/accounts/1/equity")
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
        describe('GET ' + baseUrl + "/rest/greylabels/accounts/1/freeMargin", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels/accounts/1/freeMargin")
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
        describe('GET ' + baseUrl + "/rest/greylabels/accounts/1/requiredMargin", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels/accounts/1/requiredMargin")
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
        describe('GET ' + baseUrl + "/rest/greylabels/all", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels/all")
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
        describe.skip('POST ' + baseUrl + "/rest/greylabels/bookset", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/greylabels/dashboard", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/greylabels/dashboard")
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
        describe.skip('POST ' + baseUrl + "/rest/greylabels/delete", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/greylabels/save", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/greylabels/users/accounts/update", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/marketdata/send/(modulename)", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/mergedmarketrouter/(modulename)", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/meta/accounts/types", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/accounts/types")
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
        describe('GET ' + baseUrl + "/rest/meta/enums", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/enums")
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
        describe('GET ' + baseUrl + "/rest/meta/executions/instructions", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/executions/instructions")
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
        describe('GET ' + baseUrl + "/rest/meta/executions/types", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/executions/types")
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
        describe('GET ' + baseUrl + "/rest/meta/instruments/types", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/instruments/types")
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
        describe('GET ' + baseUrl + "/rest/meta/orders/sides", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/orders/sides")
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
        describe('GET ' + baseUrl + "/rest/meta/orders/states", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/orders/states")
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
        describe('GET ' + baseUrl + "/rest/meta/orders/tifs", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/orders/tifs")
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
        describe('GET ' + baseUrl + "/rest/meta/orders/types", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/orders/types")
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
        describe('GET ' + baseUrl + "/rest/meta/tickets/states", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/meta/tickets/states")
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
        describe('GET ' + baseUrl + "/rest/orders/399", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/399")
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
        describe('GET ' + baseUrl + "/rest/orders/399/calculations", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/399/calculations")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/(id)/cancel", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/(id)/cancel")
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
        describe('GET ' + baseUrl + "/rest/orders/399/executions", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/399/executions")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/(id)/replace", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/(id)/undock", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/orders/active", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/active")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/cancel", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/dock", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/orders/events", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/events")
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
        describe('GET ' + baseUrl + "/rest/orders/events2", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/events2")
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
        describe('GET ' + baseUrl + "/rest/orders/eventsource/(type)", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/eventsource/(type)")
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
        describe('GET ' + baseUrl + "/rest/orders/eventsource/(type)/history", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/orders/eventsource/(type)/history")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/place", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/placeTrigger", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/orders/replace", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/roles/primary", () => {
            it('responds status 200, response is text/plain', () => {
                 return request.get(baseUrl + "/rest/roles/primary")
                    .redirects(0)
                    .set('Cookie', this.sessionCookies)
                    .set('Accept', 'text/plain')
                    .then(( res ) => {
                        expect(res.status).to.equal(200);
                        expect(res.text).not.to.be.empty;
                        console.log("Res.text is: ");
                        console.log(res.text);                        
                    });
            });
        });
        describe('GET ' + baseUrl + "/rest/sequences/all", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/sequences/all")
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
        describe('GET ' + baseUrl + "/rest/sequences/allocations/(sourceID)/clear", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/sequences/allocations/(sourceID)/clear")
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
        describe('GET ' + baseUrl + "/rest/sequences/allocations/(sourceID)/list", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/sequences/allocations/(sourceID)/list")
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
        describe.skip('POST ' + baseUrl + "/rest/sequences/allocations/(sourceID)/new/(allocSize)", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/sequences/delete", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe.skip('POST ' + baseUrl + "/rest/sequences/save", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "")
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
        describe('GET ' + baseUrl + "/rest/systemevents/all", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/systemevents/all")
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
        describe('GET ' + baseUrl + "/rest/userDestinations", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/userDestinations")
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
        describe('GET ' + baseUrl + "/rest/userids", () => {
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/userids")
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

/* rest list
/rest/accounts
/rest/accounts/(id)
/rest/accounts/(id)/adjustments
/rest/accounts/(id)/delete
/rest/accounts/(id)/deleteadjustments
/rest/accounts/(id)/markets
/rest/accounts/(id)/positions
/rest/accounts/(id)/retireTickets
/rest/accounts/adjustments/new
/rest/accounts/new
/rest/companies/(id)/accounts
/rest/delayedbbookgenerator/(modulename)/defaultholdtime
/rest/delayedbbookgenerator/(modulename)/groupDestMap
/rest/delayedbbookgenerator/(modulename)/groupholdtimes
/rest/delayedbbookgenerator/destholdtimes
/rest/delayedbbookgenerator/groupDestMap
/rest/delayedbbookgenerator/groupholdtimes
/rest/destinations/(id)
/rest/destinations/all
/rest/destinations/info
/rest/destinations/info/(id)
/rest/destinations/info/company/(id)
/rest/destinations/info/save
/rest/destinations/info/user
/rest/destinations/markets/all
/rest/destinations/save
/rest/earproperties
/rest/findAccounts
/rest/findOrders
/rest/gateways/(userid)/usergatewaycredentials
/rest/gateways/usergatewaycredentials
/rest/greylabels
/rest/greylabels/accounts/(accountID)/balance
/rest/greylabels/accounts/(accountID)/buyingPower
/rest/greylabels/accounts/(accountID)/equity
/rest/greylabels/accounts/(accountID)/freeMargin
/rest/greylabels/accounts/(accountID)/requiredMargin
/rest/greylabels/all
/rest/greylabels/bookset
/rest/greylabels/dashboard
/rest/greylabels/delete
/rest/greylabels/save
/rest/greylabels/users/accounts/update
/rest/marketdata/send/(modulename)
/rest/mergedmarketrouter/(modulename)
/rest/mergedmarketrouter/(modulename)
/rest/meta/accounts/types
/rest/meta/enums
/rest/meta/executions/instructions
/rest/meta/executions/types
/rest/meta/instruments/types
/rest/meta/orders/sides
/rest/meta/orders/states
/rest/meta/orders/tifs
/rest/meta/orders/types
/rest/meta/tickets/states
/rest/orders/(id)
/rest/orders/(id)/calculations
/rest/orders/(id)/cancel
/rest/orders/(id)/executions
/rest/orders/(id)/replace
/rest/orders/(id)/undock
/rest/orders/active
/rest/orders/cancel
/rest/orders/dock
/rest/orders/events
/rest/orders/events2
/rest/orders/eventsource/(type)
/rest/orders/eventsource/(type)/history
/rest/orders/place
/rest/orders/placeTrigger
/rest/orders/replace
/rest/roles/primary
/rest/sequences/all
/rest/sequences/allocations/(sourceID)/clear
/rest/sequences/allocations/(sourceID)/list
/rest/sequences/allocations/(sourceID)/new/(allocSize)
/rest/sequences/delete
/rest/sequences/save
/rest/systemevents/all
/rest/userDestinations
/rest/userids
*/
