/* eslint-env node */

import typescript from '@rollup/plugin-typescript'

const { main, module } = require('./package.json')

export default {
  input: 'src/index.ts',
  plugins: [typescript()],
  output: [
    {
      file: module,
      format: 'esm',
      sourcemap: 'inline',
    },
    {
      file: main,
      format: 'cjs',
      sourcemap: 'inline',
    },
  ],
}
