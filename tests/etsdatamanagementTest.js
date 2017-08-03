'use strict';

const request = require('superagent');
const expect = require('chai').expect;
const assert = require('chai').assert;
const describe = require('mocha').describe;
const login = require("./login.js");

// userid = 2  - test

describe('etsdatamanagementTest.js: ', () => {
    
    // login first
    beforeEach(() => {
        return login.doLogin().then(sc => {
            this.sessionCookies = sc;
        });
    });         

    const baseUrl = "http://stagging.marx.tech:8080/etsdatamanagement";    
    const callsUrl = [
        "/rest/roles/all",
        "/rest/users/2/permissions",
        "/rest/messages",
        "/rest/watchlist/1",
        "/rest/watchlist/ids",
        "/rest/users/current/permissions/primary",
        "/rest/roles/user/2/all",
        "/rest/users/2",
        "/rest/users/current/companies/divisions",
        "/rest/users/current",
        "/rest/companies/divisions/1",
        "/rest/users/current/companies/1/departments/subdepartments/visible/{showDeleted}",
        "/rest/companies/1/users/live",
        "/rest/companies/1/users/all",
        "/rest/roles/defaults/1/department",
        "/rest/users/current/companies/live",
        "/rest/users/current/companies/1/departments/live",
        "/rest/users/current/companies/1/departments/all",
        "/rest/users/current/companies/departments/all",
        "/rest/users/current/companies/departments/1/users/live",
        "/rest/users/current/companies/departments/1/users/all",
        "/rest/users/current/companies/1/departments/subdepartments/live",
        "/rest/users/current/companies/1/departments/subdepartments/all",
        "/rest/users/current/companies/departments/1/user/visible/{showDeleted}",
        "/rest/users/2/profile",
        "/rest/preferences/user",
        "/rest/users/current/companies/visible/1",
        "/rest/users/current/companies/all",
        "/rest/users/current/companies/departments/1/userinfo/visible/1",
        "/rest/companies/1",
        "/rest/users/current/companies/1/departments/visible/1",
        "/rest/users/current/companies/departments/1/userinfo/all",
        "/rest/user/templates",
        "/rest/users/all",
        "/rest/user/loggedin",
        "/rest/user/loggedin/roles",
        "/rest/company/1/users/toplevel/1"
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
//         POST /rest/companies/users/purge
    ];
    
//    for (let i = 0; i < calls.length; i++){
//        console.log(baseUrl + calls[i]);
//    }   
    
    for (let i = 0; i < callsUrl.length; i++){
        const restUrl = baseUrl + callsUrl[i];    
    
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
    }

});
    
