import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import postcssUrl from 'postcss-url';

export default {
  input: 'src/index.js',
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
  plugins: [
    postcss({
      plugins: [postcssUrl({ url: 'inline' })],
      extract: 'dist/react-pdfjs-multi.css',
    }),
    external(),
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
  ],
};
