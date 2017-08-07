'use strict';

const request = require('superagent');
const expect = require('chai').expect;
const assert = require('chai').assert;
const describe = require('mocha').describe;
const login = require("./login.js");
const skip = require('mocha').skip;

// userid = 2  - test

describe('etsdatamanagementTest.js: ', () => {
    
    // login first
    beforeEach(() => {
        return login.doLogin().then(sc => {
            this.sessionCookies = sc;
        });
    });         

    const baseUrl = "http://testui.marx.tech:8080/etsdatamanagement";
   
     describe('GET ' + baseUrl + "/rest/roles/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/roles/all")
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
     describe('GET ' + baseUrl + "/rest/users/2/permissions", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/2/permissions")
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
     describe('GET ' + baseUrl + "/rest/messages", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/messages")
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
     describe('GET ' + baseUrl + "/rest/watchlist/1", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/watchlist/1")
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
     describe('GET ' + baseUrl + "/rest/watchlist/ids", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/watchlist/ids")
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
     describe('GET ' + baseUrl + "/rest/users/current/permissions/primary", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/permissions/primary")
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
     describe('GET ' + baseUrl + "/rest/roles/user/2/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/roles/user/2/all")
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
     describe('GET ' + baseUrl + "/rest/users/2", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/2")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/divisions", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/divisions")
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
     describe('GET ' + baseUrl + "/rest/users/current", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current")
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
     describe('GET ' + baseUrl + "/rest/companies/divisions/1", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/divisions/1")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/1/departments/subdepartments/visible/{showDeleted}", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/1/departments/subdepartments/visible/{showDeleted}")
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
     describe('GET ' + baseUrl + "/rest/companies/1/users/live", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/1/users/live")
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
     describe('GET ' + baseUrl + "/rest/companies/1/users/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/1/users/all")
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
     describe('GET ' + baseUrl + "/rest/roles/defaults/1/department", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/roles/defaults/1/department")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/live", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/live")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/1/departments/live", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/1/departments/live")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/1/departments/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/1/departments/all")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/departments/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/departments/all")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/departments/1/users/live", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/departments/1/users/live")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/departments/1/users/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/departments/1/users/all")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/1/departments/subdepartments/live", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/1/departments/subdepartments/live")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/1/departments/subdepartments/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/1/departments/subdepartments/all")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/departments/1/user/visible/{showDeleted}", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/departments/1/user/visible/{showDeleted}")
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
     describe('GET ' + baseUrl + "/rest/users/2/profile", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/2/profile")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/visible/1", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/visible/1")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/all")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/departments/1/userinfo/visible/1", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/departments/1/userinfo/visible/1")
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
     describe('GET ' + baseUrl + "/rest/companies/1", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/1")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/1/departments/visible/1", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/1/departments/visible/1")
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
     describe('GET ' + baseUrl + "/rest/users/current/companies/departments/1/userinfo/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/current/companies/departments/1/userinfo/all")
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
     describe('GET ' + baseUrl + "/rest/user/templates", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/user/templates")
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
     describe('GET ' + baseUrl + "/rest/users/all", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/all")
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
     describe('GET ' + baseUrl + "/rest/user/loggedin", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/user/loggedin")
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
     describe('GET ' + baseUrl + "/rest/user/loggedin/roles", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/user/loggedin/roles")
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
     describe('GET ' + baseUrl + "/rest/company/1/users/toplevel/1", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/company/1/users/toplevel/1")
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
        
    describe.skip('Start POST calls', () => { 
    
     describe('POST ' + baseUrl + "/rest/companies/departments/purge", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/departments/purge")
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
     describe('POST ' + baseUrl + "/rest/users/{id}/permissions", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/{id}/permissions")
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
     describe('POST ' + baseUrl + "/rest/messages", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/messages")
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
     describe('POST ' + baseUrl + "/rest/watchlist/add", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/watchlist/add")
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
     describe('POST ' + baseUrl + "/rest/watchlist/delete", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/watchlist/delete")
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
     describe('POST ' + baseUrl + "/rest/users/full", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/full")
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
     describe('POST ' + baseUrl + "/rest/companies", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies")
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
     describe('POST ' + baseUrl + "/rest/roles/delete", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/roles/delete")
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
     describe('POST ' + baseUrl + "/rest/roles/save", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/roles/save")
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
     describe('POST ' + baseUrl + "/rest/application/save", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/application/save")
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
     describe('POST ' + baseUrl + "/rest/user/templates/save", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/user/templates/save")
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
     describe('POST ' + baseUrl + "/rest/user/templates/delete", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/user/templates/delete")
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
     describe('POST ' + baseUrl + "/rest/users/userinfo", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/userinfo")
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
     describe('POST ' + baseUrl + "/rest/roles/user/save", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/roles/user/save")
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
     describe('POST ' + baseUrl + "/rest/companies/purge", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/purge")
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
     describe('POST ' + baseUrl + "/rest/users", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users")
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
     describe('POST ' + baseUrl + "/rest/users/profiles", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/users/profiles")
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
     describe('POST ' + baseUrl + "/rest/preferences/user", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/preferences/user")
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
     describe('POST ' + baseUrl + "/rest/companies/divisions", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/divisions")
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
     describe('POST ' + baseUrl + "/rest/companies/users/purge", () => {                                        
            it('responds status 200, response is not empty', () => {
                 return request.get(baseUrl + "/rest/companies/users/purge")
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
});
    
 const callsUrl = [
     /*   /rest/roles/all",
        /rest/users/2/permissions",
        /rest/messages",
        /rest/watchlist/1",
        /rest/watchlist/ids",
        /rest/users/current/permissions/primary",
        /rest/roles/user/2/all",
        /rest/users/2",
        /rest/users/current/companies/divisions",
        /rest/users/current",
        /rest/companies/divisions/1",
        /rest/users/current/companies/1/departments/subdepartments/visible/{showDeleted}",
        /rest/companies/1/users/live",
        /rest/companies/1/users/all",
        /rest/roles/defaults/1/department",
        /rest/users/current/companies/live",
        /rest/users/current/companies/1/departments/live",
        /rest/users/current/companies/1/departments/all",
        /rest/users/current/companies/departments/all",
        /rest/users/current/companies/departments/1/users/live",
        /rest/users/current/companies/departments/1/users/all",
        /rest/users/current/companies/1/departments/subdepartments/live",
        /rest/users/current/companies/1/departments/subdepartments/all",
        /rest/users/current/companies/departments/1/user/visible/{showDeleted}",
        /rest/users/2/profile",
        /rest/preferences/user",
        /rest/users/current/companies/visible/1",
        /rest/users/current/companies/all",
        /rest/users/current/companies/departments/1/userinfo/visible/1",
        /rest/companies/1",
        /rest/users/current/companies/1/departments/visible/1",
        /rest/users/current/companies/departments/1/userinfo/all",
        /rest/user/templates",
        /rest/users/all",
        /rest/user/loggedin",
        /rest/user/loggedin/roles",
        /rest/company/1/users/toplevel/1"
//        POST /rest/companies/departments/purge
//     POST   /rest/users/{id}/permissions //
//     POST   /rest/messages //
//        /rest/watchlist/add //
//        POST /rest/watchlist/delete
//        POST /rest/users/full
//        POST /rest/companies
//        POST /rest/roles/delete
//        POST /rest/roles/save
//        POST /rest/application/save
//        POST /rest/user/templates/save
//        POST /rest/user/templates/delete
//        POST /rest/users/userinfo
//        POST /rest/roles/user/save
//        POST /rest/companies/purge
//        POST /rest/users
//        POST /rest/users/profiles
//         POST /rest/preferences/user
//         POST /rest/companies/divisions
//         POST /rest/companies/users/purge*/
    ];

//    for (let i = 0; i < calls.length; i++){
//        console.log(baseUrl + calls[i]);
//    }
    