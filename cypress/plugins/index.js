const zbrPlugin = require('@zebrunner/javascript-agent-cypress/lib/plugin');

module.exports = (on, config) => {

    zbrPlugin(on, config);

    on('task', {
        log(message) {
            console.log(message)
            return null
        },
    })
};
