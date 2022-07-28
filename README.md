<div align="center">
  <h1>ts-nextjs-tw-sc-starter</h1>
  <p>Next.js + Tailwind CSS + TypeScript + Styled Component starter packed with useful development features.</p>
  <p>by <a href="#">500 Designs Software Engineering Team</a></p>
</div>

# Table of contents

<!--ts-->

- [Features](#features)
- [Getting Started](#getting-started)
- [Standards / Patterns / Best Practices](#standards-patterns-and-best-practices)
  - [KISS](#kiss)
  - [DRY](#dry)
  - [Separation of concerns](#separation-of-concerns)
  - [Styling](#styling)
  - [Typescript](#typescript)
- [Naming Conventions](#naming-conventions)
- [Repo PR Requirements](#repo-pr-requirements)
<!--te-->

# Features

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

<br/>
<br/>

# Getting Started

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

<br/>
<br/>

# Standards, Patterns, and Best Practices

## KISS

- Avoid making unecessary functions taken from other projects,
  each project is custom and must match only its Figma components with pixel accuracy as much as possible.
  If there are obvious reusable components (i.e buttons, forms), add them here to our company starter /kitchen-sink page. but remove them from a project if not used.

## DRY

- but keep it simple
- All reusable compoents at an atom, element, block (before section) level are are demoed in this template
  /kitchen-sink
- Resuable intefaces and customHooks are stored in /types and /utils respectively
- For each new React project, get aquanted with components presented in the /kitchen-sink,
  then add more or add variants to existing ones as needed based on project mockups/requirements

## Separation of concerns

- keep stylsheets / styled-components purely declarative of styles
- Put logic ie. coditionals, calculations, loops inside functions component or helper files.

## Styling

- Before coding pages, components must be built first. and be presented in /kitchen-sink for other dev's reference
- match components to items presented in Figma's component screen, if not present then just refer to it's instance in the pages
- save font families and colors as variables in tailwind.config.js
- vanilla css can be used alongside tailwind syntax inside the styled component files
- use only inline tailwind styles only for quick layout i.e. tw='flex-col gap-5', the rest, place in styled components, this keeps the least band-aids or overrides on our code
- Put CSS in JavaScript - through styled components
- TBA: /kitchen-sink page loads storybook in the future, after storybook is added here

## Typescript

- Provide explicit types for all values (esp. with props), avoid using 'any' as much as possible
- Take the previous state into account while updating the state i.e.
- Use TS-free TSX (JS free JSX) as much as possible - If logic is a one-liner, then using it in the TSX is fine
- Use functional components and hooks, no class components and constructors as much as possible
- store mockdata (pre API integration) in a separate file
- Multiple component definition per file, is not allowed
- Keep components small and separate your functionalities
- Use JavaScript destructuring to remove redundancy.
- Always prefer passing objects
- Use short cirtuit operators for Conditional rendering
- Use folder components

<br/>
<br/>

# Naming Conventions

- UpperCamelCase - component / interface / type / enum / decorator / type parameters
- lowerCamelCase - variable / parameter / function / method / property / module alias
- CONSTANT_CASE - global constant values, including enum values
- CSS-in-JS - follow [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/css-in-javascript#naming)
- Avoid using abbreviations in variables i.e. for "getTZ" use getTimeZone / getTimezone
- for typescript interface or types declared inside components file add suffix "Props"
  i.e. "type ButtonProps = {" or "interface ButtonProps {"

<br/>
<br/>

# Repo PR Requirements

- Pull latest 'dev' branch and create branch using the format {jira_story_id}-{name}. i.e. "SHT-123-user-profile-ui"
- Make commits at least 1 commit per shift to your branch, even if unfinished just use commit message i.e. "wip: user profile ui"
- Check for linter warnings/error, run:
  ```bash
  yarn lint:fix
  ```
- Check for code format incosistencies, run:
  ```bash
  yarn format
  ```
- Make sure there are no build errors, so CI won't fail to check run:
  ```bash
  yarn build
  ```
- After finishing work done on story, create PR, then assign any other dev for PR approval, before merging.
- TBA: The above commands are not automated yet, so individual discretion for linting and formatting is needed for now. auto linting, and formatting, is yet to setup in the app CI.
- Follow Commit message pattern [conventional commits](https://www.conventionalcommits.org) <br/>
  <e>i.e. "fix: button alignment", "chore: lint fixes", "feat: login form"<p>

<br/>
<br/>

# Recommended VsCode Extensions (optional)

- ESLint
- GitLens
- Prettier
- Tailwind Twin IntelliSense
