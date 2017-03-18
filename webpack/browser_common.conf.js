var commonRules = require('./rules_common.config');

module.exports = {
    entry: {
        library: './src/browser_app',
    },
    module: {
        rules: commonRules,
    },
};
