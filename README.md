# PennyPath

Mobile-first financial literacy application for university freshmen and sophomores. Built with React 19, TypeScript, Tailwind CSS v4, and Vite.

## Run locally

Install Node.js compatible with Vite 8 (Node 20.19+ or 22.12+). Then:

```bash
npm install
npm run dev
```

Open the URL printed by Vite. To build for deployment:

```bash
npm run build
npm run preview
```

The app does not require a backend. Its example data and progress are currently in React state and **reset on refresh**.

## Team ownership

| Owner | Primary files | Responsibilities |
| --- | --- | --- |
| Member 1 | `src/features/HomeView.tsx`, `src/components/UI.tsx`, `src/index.css` | Dashboard, navigation, accessibility and shared design system |
| Member 2 | `src/features/LearnView.tsx`, `src/data/content.ts` | Lessons, quiz answers, feedback, XP |
| Member 3 | `src/features/BudgetView.tsx` | Income, expense allocation, budget validation and summaries |
| Member 4 | `src/features/GoalsView.tsx` | Savings goals, financial challenge and decision outcomes |

**Shared state:** `src/features/useAppModel.ts` controls data and transitions for all views. Coordinate changes here through pull requests; avoid simultaneous edits. `src/App.tsx` assembles the views and navigation. Styles currently live in the original `src/index.css`; coordinate shared styling changes, or move feature-specific styles into their own files in a follow-up PR.

## Three acceptance scenarios

1. **Simple:** Home → Learn → Needs vs. Wants → choose an answer → feedback → completion and XP.
2. **Moderate:** Budget → enter monthly income → allocate expense categories → review → save → see updated balance.
3. **Complex:** Goals → create a $600 laptop goal → review plan → simulate a $75 bike repair → choose a response → inspect outcome → update contribution → save.

## Git workflow

1. Create the GitHub repository, add all four members as collaborators, and commit this starter project to `main`.
2. Each teammate creates a branch: `git switch -c feature/home`, `feature/learn`, `feature/budget`, or `feature/goals`.
3. Commit frequently with descriptive messages and push the feature branch.
4. Open a pull request, request review from another teammate, run `npm run build`, and merge into `main`.
5. Keep PR descriptions and commit history for individual contribution evidence.

## Known issues / next improvements

- Quiz questions currently use one shared question even though multiple lessons are selectable. Make lesson-specific content before treating every lesson as complete.
- Simulation outcomes use hard-coded starting balances and approximate timelines. Recalculate these from goal, contribution, and actual budget state.
- Validate zero income, negative allocations, impossible budgets, goal dates, and savings contributions exceeding available funds.
- State is not persisted across reloads. Add localStorage if the team needs durable progress; ensure the reset control clears it.
- The app is not yet independently deployed or verified through a full browser usability test.

## Hosting

Import this repository into Vercel. For Vite, use build command `npm run build` and output directory `dist`. Test the public URL on a mobile browser and keep it accessible through the end of the semester.
