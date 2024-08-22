


import path from 'path';
import fs from 'fs';


describe('Issues', function () {
  var issues = path.resolve(import.meta.dirname, 'issues');

  fs.readdirSync(issues).forEach(async function (file) {
    if (path.extname(file) === '.js') {
      await import(path.resolve(issues, file));
    }
  });
});
