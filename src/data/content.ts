export type Tab = "home" | "learn" | "budget" | "goals";
export type LessonStep = "list" | "intro" | "quiz" | "complete";
export type BudgetStep = "overview" | "edit" | "review" | "saved";
export type GoalStep = "overview" | "create" | "review" | "simulation" | "outcome";
export type IconName =
  | "home"
  | "book"
  | "wallet"
  | "target"
  | "flame"
  | "star"
  | "arrow"
  | "back"
  | "check"
  | "lock"
  | "sparkle"
  | "calendar"
  | "edit"
  | "plus"
  | "reset"
  | "alert";

export const expenses = [
  { key: "groceries", label: "Groceries", icon: "sparkle", color: "#8FB996" },
  { key: "transportation", label: "Transportation", icon: "arrow", color: "#F7DC88" },
  { key: "entertainment", label: "Entertainment", icon: "star", color: "#F4C7AB" },
  { key: "school", label: "School supplies", icon: "book", color: "#9EC5D5" },
  { key: "savings", label: "Savings", icon: "target", color: "#2F6B4F" },
] as const;

export type ExpenseKey = (typeof expenses)[number]["key"];
export type Allocations = Record<ExpenseKey, number>;

export const defaultAllocations: Allocations = {
  groceries: 300,
  transportation: 120,
  entertainment: 160,
  school: 120,
  savings: 250,
};

export const lessons = [
  { title: "Budgeting Basics", detail: "Make every dollar count", xp: 50, icon: "wallet", color: "sage", done: false },
  { title: "Needs vs. Wants", detail: "Spend on what matters", xp: 40, icon: "sparkle", color: "yellow", done: false },
  { title: "Credit Cards", detail: "Borrow with confidence", xp: 60, icon: "star", color: "peach", done: false },
  { title: "Saving Money", detail: "Grow your rainy-day fund", xp: 50, icon: "target", color: "blue", done: false },
  { title: "Student Loans", detail: "Understand before you borrow", xp: 70, icon: "book", color: "lavender", done: false },
] as const;

