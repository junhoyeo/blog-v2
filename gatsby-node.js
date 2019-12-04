require('ts-node').register();

const { createPages } = require('./lib/createPages');
const { onCreateNode } = require('./lib/onCreateNode');

exports.createPages = createPages;
exports.onCreateNode = onCreateNode;
