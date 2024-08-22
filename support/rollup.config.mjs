import terser from '@rollup/plugin-terser';

const plugins = [terser()];

export default [
  // cjs
  {
    input: 'index.js',
    output: [{ format: 'commonjs', file: 'dist/js-yaml.cjs' }],
    plugins,
  },
  // esm
  {
    input: 'index.js',
    output: [{ format: 'esm', file: 'dist/js-yaml.js' }],
    plugins,
  },
];
