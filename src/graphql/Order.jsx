import React from 'react';
import { gql, graphql } from 'react-apollo';

const OrderRender = (props) => {

    function sendOrder(){


    }

    return (
            <div>
                <button className="btn btn-warning"
                onClick={() => sendOrder().bind(this)}>send order</button>
            </div>

          );
};

const sendOrderMutation = gql`
        mutation MainMutation{
            AddOrder(Order: $OrderInputType)
        }
`;

const Order = graphql(sendOrderMutation)(OrderRender);

export default Order;