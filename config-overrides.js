const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = (config, env) => {
    // do stuff with the webpack config...
    //config.output.publicPath = './';
    console.log(config.output.publicPath);
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({modifyVars: {"@primary-color": "#5a8bff"}})(config, env);
    return config;
};