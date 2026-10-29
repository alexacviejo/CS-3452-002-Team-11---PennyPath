import type { AppModel } from "./useAppModel";
import { expenses, defaultAllocations } from "../data/content";
import { Icon, Penny, Button, NumberInput, TopBar, Progress } from "../components/UI";

export default function BudgetView({ model }: { model: AppModel }) {
  const { tab, setTab, lessonStep, setLessonStep, lessonTitle, setLessonTitle, answer, setAnswer, feedback, setFeedback, lessonComplete, setLessonComplete, budgetStep, setBudgetStep, income, setIncome, allocations, setAllocations, budgetSaved, setBudgetSaved, goalStep, setGoalStep, goalName, setGoalName, goalCategory, setGoalCategory, target, setTarget, targetDate, setTargetDate, monthlySaving, setMonthlySaving, goalCreated, setGoalCreated, simChoice, setSimChoice, totalExpenses, remaining, goalMonths, outcome, navigate, resetAll, openLesson } = model;
  return (<>
          {tab === "budget" && budgetStep === "overview" && (
            <>
              <TopBar title="Budget" />
              <section className="page-intro budget-hero"><span className="eyebrow">YOUR MONTHLY PLAN</span><h1>Give every dollar<br />a purpose.</h1><p>A simple plan today means less stress tomorrow.</p></section>
              <section className="budget-balance card">
                <div><small>{budgetSaved ? "REMAINING THIS MONTH" : "SAMPLE MONTHLY PLAN"}</small><h2>${budgetSaved ? remaining.toLocaleString() : "250"}</h2><span>{budgetSaved ? `$${totalExpenses.toLocaleString()} planned of $${income.toLocaleString()}` : "$950 planned of $1,200"}</span></div>
                <div className="donut" style={{ "--pct": `${budgetSaved ? Math.min(100, totalExpenses / Math.max(1, income) * 100) : 79}%` } as React.CSSProperties}><b>{budgetSaved ? Math.round(totalExpenses / Math.max(1, income) * 100) : 79}%</b></div>
                <Progress value={budgetSaved ? totalExpenses / Math.max(1, income) * 100 : 79} />
              </section>
              <Button onClick={() => setBudgetStep("edit")} icon={budgetSaved ? "edit" : "plus"}>{budgetSaved ? "Edit monthly budget" : "Create my monthly budget"}</Button>
              <div className="section-title"><h2>Planned spending</h2></div>
              <section className="allocation-list card">
                {expenses.map((item) => <div key={item.key}><span className="category-dot" style={{ background: item.color }}><Icon name={item.icon} size={18} /></span><span><b>{item.label}</b><small>{Math.round((budgetSaved ? allocations[item.key] : defaultAllocations[item.key]) / income * 100)}% of income</small></span><strong>${budgetSaved ? allocations[item.key] : defaultAllocations[item.key]}</strong></div>)}
              </section>
              <div className="penny-tip"><Penny small /><div><b>Penny says</b><p>Aim to save a little every month—even $20 is a win.</p></div></div>
            </>
          )}
          {tab === "budget" && budgetStep === "edit" && (
            <>
              <TopBar title="Build your budget" onBack={() => setBudgetStep("overview")} />
              <section className="step-heading"><span className="eyebrow">STEP 1 OF 2</span><h1>What does your month look like?</h1><p>Enter your take-home income, then decide where it should go.</p></section>
              <NumberInput label="Monthly income" value={income} onChange={setIncome} />
              <div className="section-title"><h2>Monthly allocations</h2><span>Tap to edit</span></div>
              <section className="budget-inputs">
                {expenses.map((item) => <div className="budget-input-card" key={item.key}><span className="category-dot" style={{ background: item.color }}><Icon name={item.icon} size={18} /></span><NumberInput label={item.label} value={allocations[item.key]} onChange={(value) => setAllocations((current) => ({ ...current, [item.key]: value }))} /></div>)}
              </section>
              <section className={`running-total ${remaining < 0 ? "over" : ""}`}><div><span>{remaining < 0 ? "Over budget" : "Money left to plan"}</span><b>{remaining < 0 ? "-" : ""}${Math.abs(remaining).toLocaleString()}</b></div><Progress value={totalExpenses / Math.max(1, income) * 100} />{remaining < 0 && <p><Icon name="alert" size={18} />Reduce your allocations by ${Math.abs(remaining).toLocaleString()} to continue.</p>}</section>
              <div className="sticky-action"><Button disabled={income <= 0 || remaining < 0} onClick={() => setBudgetStep("review")} icon="arrow">Review my budget</Button></div>
            </>
          )}
          {tab === "budget" && budgetStep === "review" && (
            <>
              <TopBar title="Review budget" onBack={() => setBudgetStep("edit")} />
              <section className="step-heading"><span className="eyebrow">STEP 2 OF 2</span><h1>Your plan is balanced.</h1><p>Take one last look before saving your monthly budget.</p></section>
              <section className="card review-total"><div><small>MONTHLY INCOME</small><b>${income.toLocaleString()}</b></div><div><small>PLANNED</small><b>${totalExpenses.toLocaleString()}</b></div><div className="remaining"><small>LEFT OVER</small><b>${remaining.toLocaleString()}</b></div></section>
              <section className="chart-card card"><h2>Spending breakdown</h2><div className="bar-chart">{expenses.map((item) => <div key={item.key} style={{ width: `${allocations[item.key] / Math.max(1, totalExpenses) * 100}%`, background: item.color }} />)}</div>{expenses.map((item) => <div className="chart-row" key={item.key}><i style={{ background: item.color }} /><span>{item.label}</span><b>${allocations[item.key]}</b></div>)}</section>
              <button className="edit-link" onClick={() => setBudgetStep("edit")}><Icon name="edit" size={18} />Edit allocations</button>
              <div className="sticky-action"><Button onClick={() => { setBudgetSaved(true); setBudgetStep("saved"); }} icon="check">Save monthly budget</Button></div>
            </>
          )}
          {tab === "budget" && budgetStep === "saved" && (
            <>
              <TopBar title="Budget saved" />
              <section className="success-screen"><span className="success-ring"><Icon name="check" size={42} /></span><h1>Your budget has<br />a path forward!</h1><p>We’ll keep your plan right here whenever you want to check in or adjust it.</p></section>
              <section className="card saved-summary"><span className="eyebrow">YOUR MONTHLY PLAN</span><div><b>${income.toLocaleString()}</b><small>income</small><b>${remaining.toLocaleString()}</b><small>left over</small></div><Progress value={totalExpenses / Math.max(1, income) * 100} label={`${Math.round(totalExpenses / Math.max(1, income) * 100)}% allocated`} /></section>
              <div className="penny-tip"><Penny small /><div><b>Nice planning!</b><p>Your ${allocations.savings} savings allocation is already building future-you a cushion.</p></div></div>
              <div className="sticky-action dual"><Button onClick={() => setBudgetStep("overview")}>View budget</Button><Button variant="secondary" onClick={() => navigate("goals")}>Set a goal</Button></div>
            </>
          )}
  </>);
}
