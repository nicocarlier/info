# 🌐 Nico Carlier's Portfolio Website

> **Note**
> This repository contains the source code for Nico Carlier's personal portfolio website, showcasing his projects and skills as a full-stack software engineer.

## 💻 Development

### Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Scripts

Start a local development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build![alt text](<../../Downloads/AvatarMaker (2).ico>)
```

Start the production server:

```bash
npm start
```

### Directory structure

```
root
┣ app
┣ components
┣ lib
┣ pages
┣ public
┣ styles
┣ .gitignore
┣ next.config.js
┣ package.json
┣ README.md
┗ tsconfig.json
```

The configuration files in the root directory are:

- `next.config.js` - Next.js configuration
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load custom fonts.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn about React.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.

## Deployment

This website is deployed on [Vercel](https://vercel.com/), the platform created by the makers of Next.js. For more information on deploying your own Next.js app, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

© Nico Carlier

## Development

### Code Formatting and Linting

This project uses Prettier for code formatting and ESLint for linting. There are two main commands you can use:

- `npm run format`: Formats all files in the project using Prettier

  - Use this when you want to format all files in the project at once
  - This will apply consistent code style to all JavaScript, TypeScript, CSS, and JSON files

- `npx lint-staged`: Runs formatting and linting only on staged files
  - This command is automatically run before each commit through a pre-commit hook
  - It ensures that all committed code follows the project's formatting and linting rules
  - You can also run it manually to check your staged changes before committing

The pre-commit hook will automatically run `lint-staged` when you attempt to make a commit, ensuring that all committed code is properly formatted and linted.
