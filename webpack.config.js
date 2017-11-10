const path = require('path');
const webpack = require('webpack');
var SshWebpackPlugin = require('ssh-webpack-plugin');

// env
const buildDir = './assets/build/';
const entryDir = './src/main.jsx';
//const entryDir = './src/graphql/Index.jsx';

const node_env = process.env.NODE_ENV;
var pluginArr = [];
if ((node_env === 'testing') ||
    (node_env === 'testingmin') ||
    (node_env === 'stagging') ||
    (node_env === 'testui')) {
    // for deploy require remote folder structure:
    //  --project_name.war
    //    |
    //    |- assets/
    //    |- index.html - for this index page

    let fromPath,
        remoteHost,
        remotePort,
        remoteUser,
        KeyDir,
        remotePath;
    if (node_env === 'stagging'){
        fromPath = './assets';
        remoteHost = 'stagging.marx.tech';
        remotePort = '22';
        remoteUser = 'ec2-user';
        KeyDir = require('fs').readFileSync('../TradingServer.pem');
        remotePath = '/opt/marx/jboss-eap-6.4-marx/standalone/deployments/reactfront.war/assets';
    }else if (node_env === 'testui'){
        fromPath = './assets';
        remoteHost = 'testui.marx.tech';
        remotePort = '22';
        remoteUser = 'ec2-user';
        KeyDir = require('fs').readFileSync('../TradingServer.pem');
        remotePath = '/opt/marx/jboss-eap-6.4-marx/standalone/deployments/reactfront.war/assets';
    }else{
        fromPath = './assets';
        remoteHost = 'deploy.marx.tech';
        remotePort = '22';
        remoteUser = 'ec2-user';
        KeyDir = require('fs').readFileSync('../singapore-development.pem');
        remotePath = '/opt/marx/jboss-eap-6.4-marx/standalone/deployments/reactfront.war/assets';
    }

    testingDeploy = new SshWebpackPlugin({
        host: remoteHost,
        port: remotePort,
        username: remoteUser,
        privateKey: KeyDir,
        from: fromPath,
        before: 'mkdir /opt/marx/jboss-eap-6.4-marx/standalone/deployments/reactfront.war /opt/marx/jboss-eap-6.4-marx/standalone/deployments/reactfront.war/assets',
        after: 'chmod 775 -R /opt/marx/jboss-eap-6.4-marx/standalone/deployments/reactfront.war',
        cover: false, //important: If the 'cover' of value is false,All files in this folder will be cleared before starting deployment.
        to: remotePath
    });
    pluginArr.push(testingDeploy);
}

if ((node_env === 'testingmin') || (node_env === 'minimize')){
    // for production minimize code
    env = new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    });
    pluginArr.push(env);

    uglify = new webpack.optimize.UglifyJsPlugin();
    pluginArr.push(uglify);
}

module.exports = {
  entry: {
     std: path.resolve(entryDir)
//     graph: './src/graphql/Index.jsx'
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(buildDir),
    filename: "[name]_app.js"
//    publicPath: 'https://marx-tech-winter777.c9users.io/dist',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|docs)/,
        loader: 'babel',
        query: {
            presets: ['react', 'es2015', 'stage-0']
          }
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
//    ,
//    {
//        test: /\.js$/,
//        exclude: /(node_modules|bower_components)/,
//        loader: 'babel-loader',
//        query: {
//            presets: ['env']
//          }
//    }
//    ],
//    rules: [
//
    ]
  },
  plugins: pluginArr
};



