module.exports = {
  /* root: true, */
  'parser': '@typescript-eslint/parser',
  'extends': [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks', 'unused-imports', '@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  rules: {
    'react/react-in-jsx-scope': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    /* 'react/jsx-filename-extension': ['off'], */
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 0,
    'quote-props': 0,
    'object-curly-spacing': ['error', 'always'],
    'no-nested-ternary': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 'warn',
    'react/destructuring-assignment': 0,
    'react-native/split-platform-components': 2,
    'consistent-return': 0,
    'no-use-before-define': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'no-multiple-empty-lines': 2,
    /* 'padded-blocks': ['error', 'always'], */
    'react-native/no-inline-styles': 2,
    'newline-before-return': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_'
      }
    ],
    'no-unused-vars': 'error',
    'import/no-import-module-exports': 0,
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'max-len': [
      'warn',
      {
        'code': 148,
        'ignoreTrailingComments': true,
        'ignoreComments': true,
        'ignoreUrls': true
      }
    ],
    'indent': 'error',
    'no-underscore-dangle': 0,
    'default-param-last': 0,
    'react/display-name': [2, { 'ignoreTranspilerName': true }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react/require-default-props': 0
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        'no-undef': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.website.js',
          '.website.ts',
          '.website.jsx',
          '.website.tsx',
          '.desktop.js',
          '.desktop.ts',
          '.desktop.jsx',
          '.desktop.tsx',
          '.native.js',
          '.native.ts',
          '.native.jsx',
          '.native.tsx',
          '.ios.js',
          '.ios.ts',
          '.ios.jsx',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.jsx',
          '.android.tsx',
          '.config.js',
          '.config.ts',
          '.config.jsx',
          '.config.tsx'
        ]
      }
    }
  }
};
