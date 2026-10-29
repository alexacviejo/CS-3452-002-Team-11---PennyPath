# Four-person implementation checklist

## Member 1 — Home & shared UI
- [ ] Verify navigation and responsive layout on mobile
- [ ] Show accurate lesson, budget, and goal summaries
- [ ] Check accessibility labels and focus states
- [ ] Review reset functionality

## Member 2 — Learning
- [ ] Add topic-specific lesson content and correct answers
- [ ] Make incorrect answers explain the mistake
- [ ] Prevent XP from being awarded repeatedly by revisiting completion
- [ ] Add lesson completion state and test all choices

## Member 3 — Budgeting
- [ ] Validate monthly income and allocations
- [ ] Show remaining amount correctly for all valid inputs
- [ ] Prevent saving an over-budget plan or explain the warning
- [ ] Ensure saved budget updates dashboard and goals

## Member 4 — Goals & simulation
- [ ] Validate target amount, deadline, and monthly contribution
- [ ] Recalculate realistic savings timeline based on current balances
- [ ] Ensure each $75 repair decision updates the relevant amounts
- [ ] Verify updated plan is reflected in goal overview

## Everyone
- [ ] Make UI-level changes and commits in your own branch
- [ ] Review another member's PR
- [ ] Test all three flows after merging
- [ ] Record usability problems and fixes for the presentation
