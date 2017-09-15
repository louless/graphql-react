import { ApolloClient, createNetworkInterface } from 'react-apollo';
const config = require('../../assets/js/services/tradingServer/config.js');


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: config.graphqlEntryUrl,
    opts: {
        credentials: 'same-origin'
    }
  })
});

export default client;