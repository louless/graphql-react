import { ApolloClient, createNetworkInterface } from 'react-apollo';
const config = require('../../assets/js/services/tradingServer/config.js');


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: config.graphqlEntryUrl
  })
});

export default client;