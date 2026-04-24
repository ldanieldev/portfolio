import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier/flat'

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
]

export default config
