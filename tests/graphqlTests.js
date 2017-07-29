const request = require('superagent');
const expect = require('chai').expect;
const assert = require('chai').assert;
const config = require('../assets/js/services/tradingServer/config.js');
const describe = require('mocha').describe;

describe('graphqlTests.js: ', () => {
    
//    console.log('config.serverUrl: ' + config.serverUrl);
//    console.log('config.graphqlEntryUrl: ' + config.graphqlEntryUrl);
    const remoteTestUrl = config.serverUrl + 'graphqlserver/rest/graphql/test';
    const localTestUrl = 'http://localhost:8080/graphqlserver/rest/graphql/test';
//    const localTestUrl = 'http://localhost:8080/graphqlserver/rest/graphql/test';
    
    describe('localhost graphqlserver: ', () => {

        describe('method GET from ' + localTestUrl, () => {
            it('responds with 200, respond body is {hello=world} ', () => {
                return request.get(localTestUrl)
                        .timeout(2000)
                        .redirects(0)
                        .then( (res) => {
                            expect(res.status).to.equal(200);
                            console.log(res.text);
                            expect(res.text).to.be.a('string');
                            expect(res.text).to.equal('{hello=world}');
                        });
            });
        });    

        describe('method POST from ' + localTestUrl, () => {                
            it('responds with 200, respond body is object ', () => {
                return request.post(localTestUrl)
                        .timeout(2000)
                        .redirects(0)
                        .set('Content-Type', 'text/plain') 
                        .send('{ WatchLists { id name } }')
                        .then( (res) => {
                            console.log(res.body);
                            expect(res.status).to.equal(200);
                            expect(res.body).to.be.a('object');
                            expect(res.body).to.not.have.property('errors');
                            expect(res.body).to.have.property('data');
//                            expect(res.body).to.have.deep.property('WatchLists');
                        });
            });
        });    
    
    });
    
    describe('remote graphqlserver: ', () => {
        
        describe('method GET from ' + remoteTestUrl, () => {
            it('responds with 200, respond body is {hello=world} ', () => {
                return request.get(remoteTestUrl)
                        .timeout(2000)
                        .redirects(0)
                        .then( (res) => {
                            expect(res.status).to.equal(200);
                            console.log(res.text);
                            expect(res.text).to.be.a('string');
                            expect(res.text).to.equal('{hello=world}');
                        });
            });
        });    

        describe('method POST from ' + remoteTestUrl, () => {                
            it('responds with 200, respond body is object ', () => {
                return request.post(remoteTestUrl)
                        .timeout(2000)
                        .redirects(0)
                        .set('Content-Type', 'text/plain') 
                        .send('{ WatchLists { id name } }')
                        .then( (res) => {
                            console.log(res.body);
                            expect(res.status).to.equal(200);
                            expect(res.body).to.be.a('object');
                            expect(res.body).to.not.have.property('errors');
                            expect(res.body).to.have.property('data');
//                            expect(res.body).to.have.any.keys('WatchLists');
                        });
            });
        });   
        
    });
    
});