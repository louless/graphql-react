import React from 'react';
import { gql, graphql } from 'react-apollo';

const Position = ( { data: { loading, error, Positions = [] } }) => {



    if (loading) {   // networkStatus < 7
        return <p>Loading...</p>;
    } else if (error) {
        return <p>{error.message}</p>;
    }

//    const lines = Positions.map( pos => {
//              return (<li key={pos.instrument.symbol}> {pos.instrument.symbol} </li>);
//          });

    return (<div>
            <ul>
               cleared temp.
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
                         pollInterval: 15000 })
})(Position);

export default PositionQ;