import { useMemo, useState } from "react";
import { defaultAllocations } from "../data/content";
import type { Tab, LessonStep, BudgetStep, GoalStep, Allocations } from "../data/content";

export function useAppModel() {
  const [tab, setTab] = useState<Tab>("home");
  const [lessonStep, setLessonStep] = useState<LessonStep>("list");
  const [lessonTitle, setLessonTitle] = useState("Needs vs. Wants");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [budgetStep, setBudgetStep] = useState<BudgetStep>("overview");
  const [income, setIncome] = useState(1200);
  const [allocations, setAllocations] = useState<Allocations>(defaultAllocations);
  const [budgetSaved, setBudgetSaved] = useState(false);
  const [goalStep, setGoalStep] = useState<GoalStep>("overview");
  const [goalName, setGoalName] = useState("New laptop");
  const [goalCategory, setGoalCategory] = useState("Tech");
  const [target, setTarget] = useState(600);
  const [targetDate, setTargetDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [monthlySaving, setMonthlySaving] = useState(150);
  const [goalCreated, setGoalCreated] = useState(false);
  const [simChoice, setSimChoice] = useState<"entertainment" | "savings" | "contribution" | null>(null);

  const totalExpenses = Object.values(allocations).reduce((sum, value) => sum + value, 0);
  const remaining = income - totalExpenses;
  const goalMonths = Math.max(1, Math.ceil(target / Math.max(1, monthlySaving)));
  const outcome = useMemo(() => {
    if (simChoice === "entertainment") return { title: "Smart rebalancing", starting: 225, saved: monthlySaving, delay: 0, entertainment: Math.max(0, allocations.entertainment - 75), note: "Your goal stays on schedule, and entertainment drops by $75 this month." };
    if (simChoice === "savings") return { title: "Savings covered it", starting: 150, saved: monthlySaving, delay: 1, entertainment: allocations.entertainment, note: "Your goal balance drops to $150, but your usual monthly contribution stays intact." };
    return { title: "More breathing room", starting: 225, saved: Math.max(0, monthlySaving - 75), delay: 1, entertainment: allocations.entertainment, note: "You covered the repair with cash flow and lowered this month’s contribution by $75." };
  }, [simChoice, monthlySaving, allocations.entertainment]);

  function navigate(next: Tab) {
    setTab(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetAll() {
    setTab("home"); setLessonStep("list"); setLessonComplete(false); setAnswer(""); setFeedback(null);
    setBudgetStep("overview"); setIncome(1200); setAllocations(defaultAllocations); setBudgetSaved(false);
    setGoalStep("overview"); setGoalName("New laptop"); setGoalCategory("Tech"); setTarget(600);
    setTargetDate(new Date().toISOString().slice(0, 10)); setMonthlySaving(150); setGoalCreated(false); setSimChoice(null);
  }

  const openLesson = (title: string) => { setLessonTitle(title); setAnswer(""); setFeedback(null); setLessonStep("intro"); };

  return { tab, setTab, lessonStep, setLessonStep, lessonTitle, setLessonTitle, answer, setAnswer, feedback, setFeedback, lessonComplete, setLessonComplete, budgetStep, setBudgetStep, income, setIncome, allocations, setAllocations, budgetSaved, setBudgetSaved, goalStep, setGoalStep, goalName, setGoalName, goalCategory, setGoalCategory, target, setTarget, targetDate, setTargetDate, monthlySaving, setMonthlySaving, goalCreated, setGoalCreated, simChoice, setSimChoice, totalExpenses, remaining, goalMonths, outcome, navigate, resetAll, openLesson };
}
export type AppModel = ReturnType<typeof useAppModel>;
