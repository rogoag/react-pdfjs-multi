import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import postcssUrl from 'postcss-url';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    postcss({
      plugins: [postcssUrl({ url: 'inline' })],
      extract: 'dist/react-pdfjs-multi.css',
    }),
    external(),
    url(),
    typescript({
      typescript: require('typescript'),
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
  ],
};
