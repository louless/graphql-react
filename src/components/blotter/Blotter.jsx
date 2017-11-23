import React from 'react';
const ApiSvc = require('../../../assets/js/services/tradingServer/apiSvc.js');
const config = require('../../../assets/js/services/tradingServer/config.js');
const Marketdata = require('../../../assets/js/services/tradingServer/marketdata.js');
const Omsservices = require('../../../assets/js/services/tradingServer/omsservices.js');

const Blotter = () => {

    function showMessage(isLogged){
        if (isLogged){
            alert("you are logged");
        }else{
            alert("you aren't logged");
        }
    }

    function testClick (){
        var isLogged = ApiSvc.isAlreadyLogged();
      //  showMessage(isLogged);
//            ApiSvc.getAccountPositions(3).then( res => {
//                positionList = res.body;
//                console.log('position list');
//                console.log(positionList);
//            });
    };
    function loginClick(){
        if (ApiSvc.isAlreadyLogged()) {
            console.log("already logged");
            showMessage(true);
            return;
        }

        var succ = ApiSvc.login('test', 'test');
        showMessage(succ);
    };

    function testCorsGraphqlServerClick(){
        ApiSvc.testCorsGraphqlServer();
        return;
    }

    function test$Click(){
//        $.ajax({
//
//            url : config.dataMgmtUrl,
//            type : 'GET',
////            data : {
////                'numberOfWords' : 10
////            },
//            dataType:'text/html',
//            success : function(data) {
//                alert('Data: '+data);
//            },
//            error : function(request, error)
//            {
//                alert("Request: "+JSON.stringify(request));
//            }
//        });
//
        var jqxhr =
            $.ajax({
                url: config.dataMgmtUrl,
                headers: {
                    'X-PINGARUNER':'pingpong'
                }
//                data: {
//                    name : "The name",
//                    desc : "The description"
//                }
            })
            .done  (function(data, textStatus, jqXHR)        { alert("Success: " + data) ; })
            .fail  (function(jqXHR, textStatus, errorThrown) { alert("Error")   ; })
            .always(function(jqXHROrData, textStatus, jqXHROrErrorThrown)     { alert("complete"); });
    }
    function watchlistIdsClick(){
        ApiSvc.getWatchListIds();
//        $.ajax({
//                url: config.dataMgmtUrl + "rest/watchlist/ids"
//            })
//            .done  (function(data, textStatus, jqXHR)        { alert("Success: " + data) ; })
//            .fail  (function(jqXHR, textStatus, errorThrown) { alert("Error")   ; })
//            .always(function(jqXHROrData, textStatus, jqXHROrErrorThrown)     { alert("complete"); });
    }
    function watchlistTestFetchClick(){
        fetch(config.dataMgmtUrl + "rest/watchlisttest", {mode: 'cors'})
              .then(function(response) {
                 console.log(response.text);
                return response.text();
              })
              .then(function(text) {
                console.log('Request successful', text);
              })
              .catch(function(error) {
                console.log('Request failed', error);
              });
    }
    function currentUserClick(){
        ApiSvc.getCurrentUserInfo();
    }
    function getInstr(){
        Marketdata.getExchangeInstruments(1);
    }
    function getUserIds(){
        Omsservices.getUserIDs();
    }
    function getMarxEntryApp(){
        var jqxhr =
            $.ajax({
                url: 'http://deploy.marx.tech:8080/marxentry/login?username=administrator&password=marx',
//                headers: {
//                    'X-PINGARUNER':'pingpong'
//                }
//                data: {
//                    name : "The name",
//                    desc : "The description"
//                }
                xhrFields: {
                    withCredentials: true
                }
            })
            .done  (function(data, textStatus, jqXHR)        { alert("Success: " + data) ; })
            .fail  (function(jqXHR, textStatus, errorThrown) { alert("Error")   ; })
            .always(function(jqXHROrData, textStatus, jqXHROrErrorThrown)     { alert("complete"); });
    }

  return (
    <div className="panel panel-default">
      <div className="panel-heading">BLOTTER</div>
      <div className="panel-body">
        Panel content
        <button className="btn className='btn btn-primary btn-block" onClick={testClick}>test CORS marx app</button>
        <button className="btn className='btn btn-primary btn-block" onClick={test$Click}>test CORS marx app using JQuery</button>
        <button className="btn className='btn btn-primary btn-block" onClick={loginClick}>do log in as test</button>
        <button className="btn className='btn btn-primary btn-block" onClick={testCorsGraphqlServerClick}>test CORS graphqlserver app</button>
        <button className="btn className='btn btn-primary btn-block" onClick={watchlistIdsClick}>watchlist Ids</button>
        <button className="btn className='btn btn-primary btn-block" onClick={watchlistTestFetchClick}>watchlist test Fetch</button>
        <button className="btn className='btn btn-primary btn-block" onClick={getUserIds}>getUserIds</button>
        <button className="btn className='btn btn-primary btn-block" onClick={getInstr}>get instr exch = 1</button>
        <button className="btn className='btn btn-primary btn-block" onClick={getMarxEntryApp}>marxentry</button>       
      </div>
    </div>
  );
};

export default Blotter;
