# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



# <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="40" height="40"/> <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" width="40" height="40"/> VS Code UI Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/npm.svg?style=flat)](https://www.npmjs.com/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://your-ci-link)

A **React with TypeScript** project that clones the user interface of **Visual Studio Code**. This project aims to replicate the VS Code layout, themes, and editor components with the added type safety and maintainability of TypeScript.

## 🌟 Features

- **VS Code Layout**: Faithfully recreates the VS Code interface using React components.
- **Editor Functionality**:  Basic text editing and syntax highlighting within the editor area.
- **Theming Support**: Allows switching between light and dark modes.
- **State Management**: Utilizes React Hooks for efficient UI updates.
- **Responsive Design**:  Adapts to various screen sizes.
- **TypeScript**:  Leverages TypeScript for improved code quality and maintainability.





### Clone and Install

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/vscode-ui-clone.git
   cd vscode

   
   
### Install Project Dependencies Using The Install Script

```bash
npm install
--OR--
bun install
```

### Then Run Your Local Development Server

```bash
npm run dev
--OR--
bun run dev
```
