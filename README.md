# Hanker Component Library

## Core Technologies

- React 18+
- Vite
- Typescript
- TailwindCSS
- PostCSS
- ESLint
- Husky

## How to Build and Manage Components?

### Creating New Components

- Create individual Component files in the `/components` directory
- Export all of these components in the `/components/index.ts` file, this is where the build instructions are pulling components from

### Editing Components

- Simply edit them

### How to deploy changes

1. Once your changes have been made and tested locally, increment the version number in the `package.json` file. This is a requirement for the NPM Registry. Use Semantic Versioning as much as possible.
2. Run `npm run build` to build the latest version of the package with your updates.
3. In the terminal, from the top-level project directory `/brandable-ui-library`, log in to your NPM account with `npm auth login`.
4. Run `npm publish`

### How to consume new changes?

- Update the package manually from the CONSUMING APPLICATION
  - Increment the `brandable-ui-library` in `dependencies` to the new version.
  - Run a new `npm install` or `yarn`

## Instructions for Consumption

1. Install the package with NPM or Yarn:

`npm i brandable-ui-library `

2. In the Consuming Application's `tailwind.config.js` file, add the following line in the `content` block:

`"./node_modules/brandable-ui-library/**/*.{js,ts,jsx,tsx}"`

3. Import and use components as normal in your files
4. Override the imported components styling using the Tailwind Config

## Local Development

- `npm run [command]` will run the Vite build commands under the hood, check `package.json` for full details.
- `npm run dev` to test locally
# brandable-ui-library
