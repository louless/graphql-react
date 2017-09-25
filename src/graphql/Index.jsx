import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './GraphqlEndpoint.jsx';
import TodoApp from './TodoApp.jsx';

const WatchListxample = 1;
const ExchangeExample = 1;

ReactDOM.render(
  <ApolloProvider client={client}>
    <TodoApp watchListID={WatchListxample} exchangeId={ExchangeExample} />
  </ApolloProvider>,
  document.getElementById('app')
);