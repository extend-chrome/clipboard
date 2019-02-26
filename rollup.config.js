/* eslint-env node */

import resolve from 'rollup-plugin-node-resolve'
import sucrase from 'rollup-plugin-sucrase'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

// Where to start
const input = 'src/index.js'

// ES Module Syntax example:
// import package from 'module_name'
const esm = {
  // Target output file
  file: 'build/bundle-esm.js',
  // Output to ECMAScript Modules: https://flaviocopes.com/es-modules/
  format: 'esm',
  // Include sourcemaps
  sourcemap: 'inline',
}

// CommonJS Syntax example:
// const package = require('module-name')
const cjs = {
  // Target output file
  file: 'build/bundle-cjs.js',
  // Output to CommonJS: https://flaviocopes.com/commonjs/
  format: 'cjs',
  // Include sourcemaps
  sourcemap: 'inline',
}

// Pass the entry file through each plugin in order
const plugins = [
  // Find files in 'node_modules'
  resolve(),
  // Transform files: https://github.com/alangpierce/sucrase
  sucrase({
    // Folders not to transform
    exclude: ['node_modules/**'],
    // Transform these types of code:
    // (uncomment to enable!)
    transforms: [
      // 'jsx',
      // 'typescript',
      // 'flow',
      // 'imports',
      // 'react-hot-loader'
    ],
  }),
  // Handle modules that still use CommonJS
  commonjs(),
  // Import JSON files as objects
  json(),
]

// Put it all together and export to Rollup
export default [
  {
    input,
    output: [esm, cjs],
    plugins,
  },
]
