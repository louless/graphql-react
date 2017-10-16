import React from 'react';
import { gql, graphql } from 'react-apollo';
import Mutation from './Mutation.jsx';
import Position from './Position.jsx';

function TodoApp( { data: { loading, error, Exchanges = [], Orders = [], refetch } } ) {

//    console.log('enter to todoApp...');
//    console.log(typeof WatchLists);
//    console.log(JSON.stringify(WatchLists));

    if (loading) {   // networkStatus < 7
        return <p>Loading...</p>;
    } else if (error) {
        return <p>{error.message}</p>;
    }
    
    return (
            <div>
                <button onClick={() => refetch()}>
                    Refresh
                </button>
                <ul>
                    {Exchanges.map((ex) => (<li key={ex.id}> {ex.description} </li>))}
                </ul>
                <Mutation tmp={345}/>
                <Position accountId={1} />
            </div>
            );
}

// works with deploy Marx
const MainQ = gql`
  query TodoAppQuery ($watchListID: Int, $exchangeId: Int){
    WatchLists (watchListID: $watchListID)  {
      id
      name
    }
    Exchanges {
      id
      description
    }
    Instruments (exchangeId: $exchangeId) {
        id
        symbol
        exchangeid
    }
    Routes{
        carrier
        supplier
        description
    }
    Accounts{
        id
        name
    }
    Orders
  }
`;
//
//    Orders{
//        id
//        price
//        quantity
//        side
//        type
//    }

const TodoAppQ = graphql(MainQ, {
  options: ({ watchListID, exchangeId }) => ({ variables: { watchListID, exchangeId} })   
})(TodoApp);

export default TodoAppQ;
