/*  
 * login part for each REST call 
 * 
*/

'use strict';

const request = require('superagent');
const expect = require('chai').expect;
const assert = require('chai').assert;
const describe = require('mocha').describe;


// utility function for getting first cookie from response
const getFirstCookie = (res) => {
    const cookies = res.headers['set-cookie'];
    const cookie = cookies[0];
    if (!cookies)
        return null;
    return cookie.substr(0, cookie.indexOf(';'));
};

const serverUrl = 'http://testui.marx.tech:8080/';
const dataMgmtUrl = serverUrl + 'etsdatamanagement/';
const loginUrl = dataMgmtUrl+'j_security_check';
//const username = "test";
//const password = "test";
const username = "administrator";
const password = "marx";
/**
 * utility function to do login
 * 1) send request for base url
 * 2) parse response cookies and get first 
 * 3) send request with one cookie and creds
 * 4) return 2 cookies (first response cookie and one cookie above )
 * @returns {Promise}
 */
const doLogin = () => {
    return new Promise((resolve, reject) => {
        request.get(dataMgmtUrl)
                .timeout({
                        response: 5000,  // Wait 5 seconds for the server to start sending,
                        deadline: 60000  // but allow 1 minute for the file to finish loading.
                      })
                .then(getFirstCookie)
                .then(sessionCookie => {
                    request.post(loginUrl)
                            .timeout({
                                response: 10000,  // Wait 10 seconds for the server to start sending,
                                deadline: 60000  // but allow 1 minute for the file to finish loading.
                              })
                            .redirects(1)
                            .set('Content-Type', 'application/x-www-form-urlencoded')
                            .set('Cookie', sessionCookie)
                            .send({j_username: username, j_password: password})
                            .then(res => {
                                const sessionCookies = sessionCookie + '; ' + getFirstCookie(res);
                                resolve(sessionCookies);
                            });
                    })
                .catch(err => {
                    console.log('--- error in doLogin');
                    console.log(err);
                    reject(err);
                    });
    });
};

module.exports = {
    doLogin : doLogin
};


