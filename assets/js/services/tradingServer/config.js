const serverUrl = 'http://deploy.marx.tech:8080/';
const dataMgmtUrl = serverUrl + 'etsdatamanagement/';
const loginUrl = dataMgmtUrl+'j_security_check';

const dataMgmtRestUrl = serverUrl + 'etsdatamanagement/rest/';
const marketDataRestUrl = serverUrl + 'etsmarketdata/rest/';
const orderMgmtRestUrl = serverUrl + 'omsrestservices/rest/';

// react-route paths
var loginPath;
var dashboardPath;
var privatePath;
if (process.env.NODE_ENV === 'localhost') {
    loginPath = '/react-graphql/login';
    dashboardPath = '/react-graphql/';
    privatePath = '/react-graphql/private';  
}else if (process.env.NODE_ENV === 'testing'){
    loginPath = '/reactfront/login';
    dashboardPath = '/reactfront/';
    privatePath = '/reactfront/private';      
}else{
    loginPath = '/login';
    dashboardPath = '/';
    privatePath = '/private';  
}

// graphql paths 
const localGraphqlEntry = 'http://localhost:8080/graphqlserver/rest/graphql/root';
const remoteGraphqlEntry = serverUrl + 'GraphqlServer/rest/graphql/root';

let graphqlEntryUrl;
//graphqlEntryUrl = remoteGraphqlEntry;
if (process.env.NODE_ENV === 'localhost') {
    graphqlEntryUrl = localGraphqlEntry;
}else{
    graphqlEntryUrl = remoteGraphqlEntry;
}



module.exports = {
  serverUrl: serverUrl,
  dataMgmtUrl: dataMgmtUrl,
  loginUrl: loginUrl,
  dataMgmtRestUrl: dataMgmtRestUrl,
  marketDataRestUrl: marketDataRestUrl,
  orderMgmtRestUrl: orderMgmtRestUrl,
  username: 'test',
  password: 'test',
  loginPath: loginPath,
  dashboardPath: dashboardPath,
  privatePath: privatePath,
  graphqlEntryUrl: graphqlEntryUrl
};