import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    plugins: {
      perfectionist
    },
    rules: {
      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-svelte-attributes': [
        'warn',
        {
          customGroups: {
            this: 'this',
            'bind-this': 'bind:this',
            class: 'class',
            'bind-directives': 'bind:*',
            'use-directives': 'use:*'
          },
          groups: [
            ['this', 'bind-this'],
            'class',
            'unknown',
            'svelte-shorthand',
            'multiline',
            ['bind-directives', 'use-directives']
          ]
        }
      ]
    }
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/', 'src/lib/api/specification.ts']
  }
];
