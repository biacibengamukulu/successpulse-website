# GEMINI.md - Workspace Instructions & Rules

This file provides project-specific context, coding guidelines, and rules for Gemini-powered coding assistants working in this repository.

---

## 📋 Project Overview
- **Name:** [Project Name]
- **Description:** [Brief description of what this project does]
- **Main Objectives:**
  - [Objective 1]
  - [Objective 2]

## 🛠️ Technology Stack
- **Core Languages:** [e.g., TypeScript,  Go]
- **Frameworks & Libraries:** [e.g., Next.js, FastAPI]
- **Database:** [e.g., Cassandra (server url  safer.easipath.com   no password)]
- **Package Manager:** [e.g., npm, pnpm, poetry]

## 🎨 Coding Style & Conventions
- **Formatting:** [e.g., Prettier/ESLint defaults]
- **Naming Conventions:**
  - Variables & Functions: `camelCase`
  - Classes & Types: `PascalCase`
  - Constants: `UPPER_SNAKE_CASE`
- **Patterns:** [e.g., Favor functional programming and hooks, avoid class components]

## 🤖 Agent Instructions & Behavior
When generating code or proposing changes in this workspace, please adhere to the following rules:
1. **TypeScript / Type Safety:** Always write strictly typed code. Avoid using `any`.
2. **Testing:** Include unit tests (e.g., Jest/Vitest) for all new utility functions and business logic components.
3. **Documentation:** Write clean, self-documenting code with concise JSDoc/docstring comments for exported functions and complex logic.
4. **Consistency:** Match the style and patterns of existing files in the directory.
5. **No Placeholders:** Provide complete code blocks without `// TODO: implement later` style placeholders unless explicitly requested.

---

*Tip: Feel free to customize this file to match your team's specific stack and engineering guidelines. Gemini-based assistants will automatically read and respect these guidelines during chat and edit commands.*
