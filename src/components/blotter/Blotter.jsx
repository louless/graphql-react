import React from 'react';
const ApiSvc = require('../../../assets/js/services/tradingServer/apiSvc.js');


const Blotter = () => {
    
    function testClick (){
            ApiSvc.getAccountPositions(this.state.account).then( res => {
                positionList = res.body;
                console.log('position list');
                console.log(positionList);
            });
//    {/* <!--<button className="btn" onClick={testClick}>test get data</button>--> */}
    };    
    
  return (
    <div className="panel panel-default">
      <div className="panel-heading">BLOTTER</div>
      <div className="panel-body">
        Panel content
    
      </div>
    </div>
  );
};

export default Blotter;
