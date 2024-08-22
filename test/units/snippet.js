import assert from 'assert';
import fs from 'fs';
import path from 'path';
import snippet from '../../lib/snippet.js';

it('Snippet', function () {
  let filepath = path.join(import.meta.dirname, 'snippet.txt'),
    filedata = fs.readFileSync(filepath, 'utf8');

  let data = filedata.split(/(---[ \d]*\n)/).slice(1);

  for (let i = 0; i < data.length; i += 4) {
    let index = 0,
      line = 0,
      column = 0,
      input = data[i + 1],
      expected = data[i + 3].replace(/\n$/, ''),
      mark,
      code;

    assert(input.indexOf('*') >= 0);

    while (input[index] !== '*') {
      if (input[index] === '\n') {
        line += 1;
        column = 0;
      } else {
        column += 1;
      }
      index += 1;
    }

    mark = {
      name: filepath,
      buffer: input,
      position: index,
      line: line,
      column: column,
    };

    code = snippet(mark, {
      indent: 1,
      maxLength: 78,
      linesBefore: 3,
      linesAfter: 2,
    });

    assert.strictEqual(code, expected);
  }
});
