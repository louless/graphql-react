import React from 'react';
import { gql, graphql } from 'react-apollo';

const OrderRender = (props) => {

    function sendOrder(){

        let newOrder = {
                "id" : null,
                "state" : null,
                "type" : "MARKET",
                "side" : "SELL",
                "notes" : null,
                "companyId" : 1,
                "ownerId" : 1,
                "creationTime" : 1508402491835,
                "quantity" : 100000,
                "instrument" : {
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
                },
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
                "custOrderId" : "c5c6bf91-fe52-4b32-8bd0-7ac1e62f3abb",
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
        mutation MutationMain($Order: OrderInputType){
            AddOrder(Order: $Order)
        }
`;

const Order = graphql(sendOrderMutation)(OrderRender);

export default Order;