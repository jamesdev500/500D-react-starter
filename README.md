<div align="center">
  <h1>ts-nextjs-tw-sc-starter</h1>
  <p>Next.js + Tailwind CSS + TypeScript + Styled Component starter packed with useful development features.</p>
  <p>by <a href="#">500 Designs Software Engineering Team</a></p>
</div>

## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ✨ TypeScript
- 😎 [Styled Components](https://styled-components.com/docs)
- 💨 Tailwind CSS 3 — Configured with twin.macto to be usable inside styled components
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Standard Version Changelog — Generate your changelog using `yarn release`
- 👷 Github Actions — Lint your code on PR
- 🗺 Site Map — Automatically generate sitemap.xml

## Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Standards / Patterns / Best Practices

- <b>KISS</b> - avoid making unecessary functions taken from other projects,
  each project is custom and must match only it's Figma components with pixel accuracy as much as possible,
  if there are obvious reusable based components (not including styles), add them here to our company boilerplate /kitchen-sink page.
- <b>DRY</b> - but keep it simple
  - All reusable compoents at an atom, element, block (before section) level are are demoed in this template
    /kitchen-sink
  - Resuable intefaces and customHooks are stored in /types and /utils respectively
- For each new React project, get aquanted with components in the /kitchen sink always add more or add variants to existing ones as needed.
- <b>Separation of concerns</b>:
  - keep stylsheets / styled-components purely declarative of styles
  - Put logic ie. coditionals, calculations, loops inside functions component or helper files.
    Styling:
  - Use only inline tailwind styles only for quick layout i.e. tw='flex flex-col gap-5', the rest place in styled components
  - Put CSS in JavaScript - through styled components
- <b>Typescript:</b>

  - Provide explicit types for all values (esp. with props), avoid using 'any' as much as possible
  - Take the previous state into account while updating the state
  - Use TS-free TSX (JS free JSX) as much as possible - If logic is a one-liner, then using it in the TSX is fine

- Use functional components and hooks, no class components and constructors as much as possible
- store mockdata (pre API integration) in a separate file
- Multiple component definition per file, is not allowed
- Keep components small and separate your functionalities
- Use JavaScript destructuring to remove redundancy.
- Always prefer passing objects
- Use short cirtuit operators for Conditional rendering
- Use folder components

### Naming Conventions

- UpperCamelCase - component / interface / type / enum / decorator / type parameters
- lowerCamelCase - variable / parameter / function / method / property / module alias
- CONSTANT_CASE - global constant values, including enum values
- CSS-in-JS - follow [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript#naming)
- Avoid using abbreviations in variables i.e. for "getTZ" use getTimeZone / getTimezone

### Requirements before making PR / Merges

- Check for linter warnings/error, if present run:
  ```bash
  yarn lint:fix
  ```
- Check for code format incosistencies, if present run:
  ```bash
  yarn format
  ```
- Make sure there are no build errors, run:
  ```bash
  yarn build
  ```
- Follow Commit message pattern [conventional commits](https://www.conventionalcommits.org) <br/>
  <e>i.e. "fix: button alignment", "chore: lint fixes", "feat: login form"<p>

### Recommended VsCode Extensions

- ESLint
- GitLens
- Prettier
- Tailwind Twin IntelliSense
