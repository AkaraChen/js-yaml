#!/usr/bin/env node

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/* eslint-env es6 */

const shell = require('shelljs');

shell.rm('-rf', 'demo');
shell.mkdir('demo');

shell.exec('node_modules/.bin/rollup -c support/demo_template/rollup.config.js');

shell.cp('support/demo_template/index.html', 'demo/');
shell.cp('support/demo_template/demo.css', 'demo/');
shell.cp('node_modules/codemirror/lib/codemirror.css', 'demo/');
