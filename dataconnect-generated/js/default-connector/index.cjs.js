const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'project05',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

