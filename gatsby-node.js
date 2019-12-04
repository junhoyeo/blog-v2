require('ts-node').register();

import { createPages } from './lib/createPages';
import { onCreateNode } from './lib/onCreateNode';

exports.createPages = createPages;
exports.onCreateNode = onCreateNode;
