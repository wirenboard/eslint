import typescriptParser from '@typescript-eslint/parser';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default defineConfigWithVueTs(
  vuePlugin.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    rules: {
      'vue/no-v-html': 0,
      'vue/attribute-hyphenation': 0,
      'vue/no-unused-components': [1, {
        ignoreWhenBindingPresent: true,
      }],
      'vue/no-unused-vars': 1,
      'vue/no-multi-spaces': 1,
      'vue/html-indent': [1, 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }],
      'vue/script-indent': [1, 2, {
        baseIndent: 1,
        switchCase: 1,
        ignores: [],
      }],
      'vue/block-order': [1, {
        order: [ 'script', 'template', 'style' ],
      }],
      'vue/block-lang': [1,
        {
          script: {
            lang: 'ts',
          },
        },
      ],
    },
    plugins: {
      vue: vuePlugin,
    },
    languageOptions: {
      parser: vueParser,

      parserOptions: {
        parser: typescriptParser,
      },
    },
  }
);
