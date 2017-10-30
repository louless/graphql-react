import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './GraphqlEndpoint.jsx';
import TodoApp from './TodoApp.jsx';

const WatchListxample = 1;
const ExchangeExample = 1;
const orderFilter = { companyid:1,
                    accountid:1,
                    showCalcs:true,
                    quantity:12,
                    descending:true};

ReactDOM.render(
  <ApolloProvider client={client}>
    <TodoApp watchListID={WatchListxample} exchangeId={ExchangeExample} orderFilter={orderFilter} />
  </ApolloProvider>,
  document.getElementById('app')
);