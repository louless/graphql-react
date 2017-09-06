'use strict';

const request = require('superagent');
const config = require('./config.js');


// REST calls for market data point


const getExchangeInstruments = (idExchange) => {
    return request.get(config.marketDataRestUrl + 'symbols/exchange/' + idExchange)
            //.timeout(5000)
         //   .redirects(0)
            .withCredentials()
//            .set('Cookie', cookie)
//            .set('Accept', 'application/json') by default
            .then( ( res )=> {
                console.log(res.body);
                return res.body;
            })
            .catch( ( err ) => {
                console.log('error getting instruments: ' + err);
            });
};


module.exports.getExchangeInstruments = getExchangeInstruments;