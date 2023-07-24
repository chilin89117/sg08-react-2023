<img
  src="./public/screen.png"
  alt="sg08-03-pdas"
  style="display: block; margin: 0 auto; max-width: 600px"
/>

## __1. Bulma CSS framework__
- ### `$ npm i bulma`
- ### `import 'bulma/css/bulma.min.css'` in `App.jsx`

## __2. Add packages__
`$ npm i -D eslint eslint-plugin-react eslint-config-prettier prettier`

## __3. Add scripts to `package.json`__

```json
"lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",
"lint:fix": "eslint --fix src/**/*.{js,jsx,ts,tsx,json}",
"format": "prettier --write src/**/*.{js,jsx,ts,tsx,css,md,json,scss} --config ./.prettierrc"
```

## __4. Add `.eslintrc.json`__

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "settings": {"react": {"version": "detect"}},
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off"
    }
}
```

## __5. Add `.prettierrc`__

```json
{
  "singleQuote": true,
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": false,
  "jsxSingleQuote": true,
  "bracketSpacing": false,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always",
  "singleAttributePerLine": true,
  "printWidth": 120
}
```
