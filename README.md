# @wirenboard/eslint

@wirenboard/eslint is a set of [ESLint](https://eslint.org/) configurations for Wiren Board projects. It helps maintain a consistent coding style, prevents common mistakes, and improves team productivity.
The package includes three presets:
- **Base** (`@wirenboard/eslint`) — for JavaScript and TypeScript projects, including stylistic rules and import checks.
- **React** (`@wirenboard/eslint/react`) — extends Base with React and JSX rules.
- **Vue** (`@wirenboard/eslint/vue`) — extends Base with Vue rules.

## Installation

Install ESLint and config:

```bash
npm install --save-dev eslint@^9.19.0 @wirenboard/eslint
```

## Usage

Create a file `eslint.config.mjs` in the root of your project and set configuration:

### Base config (JavaScript/TypeScript)

```javascript
// eslint.config.mjs
import baseConfig from '@wirenboard/eslint';

export default [...baseConfig];
```

### React config

```javascript
// eslint.config.mjs
import baseConfig from '@wirenboard/eslint';
import reactConfig from '@wirenboard/eslint/react';

export default [...baseConfig, ...reactConfig];
```

### Vue config

```javascript
// eslint.config.mjs
import baseConfig from '@wirenboard/eslint';
import vueConfig from '@wirenboard/eslint/vue';

const getCustomConfig = (cfg) => {
  const { rules, ...rest } = cfg.at(0);

  return [{ ...rest, rules: { ...rules, 'stylistic/indent': 0 } }];
};

export default [
  ...getCustomConfig(baseConfig),
  ...vueConfig,
];
```

### Advanced settings

In some cases, you need to redefine certain rules or paths. To do this, you can use the following method:

```javascript
// eslint.config.mjs
import baseConfig from '@wirenboard/eslint';
import reactConfig from '@wirenboard/eslint/react';

const getCustomConfig = (cfg) => {
  const legacyCodeDirectories = [
    'app/scripts/**',
  ];
  
  const specifiedRules = {
    'no-restricted-globals': 0,
  }
  
  const { ignores, rules, ...rest } = cfg.at(0);

  return [
    {
      ...rest,
      ignores: [...ignores, ...legacyCodeDirectories],
      rules: { ...rules, ...specifiedRules },
    }
  ];
};

export default [
  ...getCustomConfig(baseConfig),
  ...getCustomConfig(reactConfig)
];
```

## Auto-formatting on save

For the best experience, enable automatic formatting in your editor so ESLint rules are applied every time you save a file.

### VS Code

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint);
2. Add the following to settings.json:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```

### WebStorm / IntelliJ IDEA:

1. Go to Settings → Languages & Frameworks → Javascript → Code Quality Tools → ESLint;
2. Enable Automatic ESlint configuration;
3. Set Run eslint --fix on save.
