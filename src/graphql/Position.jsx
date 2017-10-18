import React from 'react';
import { gql, graphql } from 'react-apollo';

const Position = ( { data: { loading, error, Positions = [] } }) => {



    if (loading) {   // networkStatus < 7
        return <p>Loading...</p>;
    } else if (error) {
        return <p>{error.message}</p>;
    }
//    console.log(JSON.stringify(Positions));
//    console.log(Positions.length);

//    for (let j = 0; j < Positions.length - 1; j ++){
//        console.log(j);
//        console.log(Positions[j].instrument.symbol);
//    }

    const lines = Positions.map( pos => {
              return (<li key={pos.instrument.symbol}> {pos.instrument.symbol} </li>);
          });

    return (<div>
            <ul>
               {lines}
            </ul>
          </div>
        );
};

const query = gql`
  query TodoAppQuery ($accountId: Int) {
    Positions(accountId: $accountId){
        instrument{
            id
            symbol
        }
        price
        quantity
    }
  }
`;



const PositionQ = graphql(query, {
  options: (props) => ({ variables: {accountId: props.accountId},
                         pollInterval: 5000 })
})(Position);

export default PositionQ;