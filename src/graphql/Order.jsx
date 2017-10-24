import React from 'react';
import { gql, graphql } from 'react-apollo';
const Marxcore = require('../../assets/js/marx.core.js');

const OrderRender = (props) => {

    function sendOrder(){

        let instrumentToSubmit = {
                    "attributes" : //[
                       // "java.util.TreeMap",
                        {
                            "PRICEDIGITS" : 5
                        },
                    //],
                    "baseSymbol" : "",
                    "exchangeid" : 1,
                    "id" : 57,
                    "symbol" : "AUDCAD",
                    "type" : "FOREIGNEXCHANGE",
                    "underlyingid" : 0
                };

        let newOrder = {
                "id" : null,
                "state" : null,
                "type" : "MARKET",
                "side" : "SELL",
                "notes" : null,
                "companyId" : 1,
                "ownerId" : 1,
                "creationTime" : (+new Date),
                "quantity" : 100000,
                "instrument" : instrumentToSubmit,
                "relatedOrderId" : 0,
                "accountId" : 1,
                "destinationId" : 1,
                "expireTime" : 0,
                "market" : 1,
                "orderId" : null,
                "price" : null,
                "ticketId" : null,
                "tif" : "DAY",
                "dispQty" : 0,
                "stopPrice" : null,
                "lastState" : null,
                "capacity" : "AGENCY",
                "cpOrderId" : null,
                "avgprice" : null,
                "cumqty" : 0,
                "leavesqty" : 0,
                "aon" : false,
                "custOrderId" : Marxcore.createUUID(),
                "execInst" : null,
                "relatedClOrdId" : null,
                "quoteId" : null
            };

        props.mutate(
            { variables: { order: newOrder }}
        )
        .then(({ data }) => {
                console.log('got data after send order', data);
        })
        .catch((error) => {
                console.log('there was an error sending the order', error);
        });

    }

    return (
            <div>
                <button className="btn btn-warning"
                onClick={() => sendOrder()}>Send order</button>
            </div>

          );
};

const sendOrderMutation = gql`
        mutation MutationMain($order: OrderInputType){
            AddOrder(order: $order){
                id
                createTime
                type
                text
            }
        }
`;

const Order = graphql(sendOrderMutation)(OrderRender);

export default Order;