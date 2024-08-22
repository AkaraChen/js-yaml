import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default [
  {
    input: 'support/demo_template/demo.js',
    output: { file: 'demo/demo.js', format: 'iife', name: 'demo' },
    plugins: [nodePolyfills(), nodeResolve(), commonjs()],
  },
];
