import React, { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseContext } from "../context/expense_context";
import { getDateMinusDays } from "../Util/date";

const RecentExpence = () => {
  const expensesCtx = useContext(ExpenseContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 14);
    return expense.data > sevenDaysAgo;
  });
  return (
    <ExpenseOutput expenses={recentExpenses} expensesPeriod="Last 14 Days" />
  );
};

export default RecentExpence;
