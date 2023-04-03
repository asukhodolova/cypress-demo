const { defineConfig } = require('cypress');
const zbrPlugin = require('@zebrunner/javascript-agent-cypress-dev/lib/plugin');

module.exports = defineConfig({
  reporter: '@zebrunner/javascript-agent-cypress-dev',
  reporterOptions: {
    reportingServerHostname: 'https://sanna.zebrunner.dev/',
    reportingServerAccessToken: 'JHq10kuJrPAjeZjvyXSNVTqWx2hpGjO2jVGGDqfhRitTslmn4P',
    reportingProjectKey: 'ANNAS',
    reportingRunEnvironment: 'LOCAL',
    reportingRunBuild: 'upgrade.12',
    reportingRunDisplayName: 'Cypress 12',
    reportingRunLocale: 'en_US',
    reportingSlackChannels: 'dev222',
    reportingEmailRecipients: 'asukhodolova@solvd.com',
    tcm: {
      zebrunner: {
        pushResults: true,
        pushInRealTime: true,
        testRunId: 3,
      },
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      zbrPlugin(on, config);

      on('task', {
          log(message) {
              console.log(message)
              return null
          },
      });
    },
  },
})
