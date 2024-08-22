import fs from 'fs';
import path from 'path';

describe('Units', async function () {
  var directory = path.resolve(import.meta.dirname, 'units');

  fs.readdirSync(directory).forEach(async function (file) {
    if (path.extname(file) === '.js') {
      await import(path.resolve(directory, file));
    }
  });
});
