/* eslint-env node */

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'lib/bumble-clipboard-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'lib/bumble-clipboard-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external: ['@bumble/notify'],
  },
]
