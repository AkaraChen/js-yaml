#!/usr/bin/env node;

import fs from 'fs';
import path from 'path';
import * as yaml from '../index.js';

var data = fs.readFileSync(path.join(import.meta.dirname, '/samples/document_nodeca_application.yaml'), 'utf8');

for (var i = 0; i < 10000; i++) {
  yaml.load(data);
}
