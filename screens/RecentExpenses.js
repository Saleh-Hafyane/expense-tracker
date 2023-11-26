import React, { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseContext } from "../context/expense_context";
import { getDateMinusDays } from "../Util/date";

const RecentExpence = () => {
  const expensesCtx = useContext(ExpenseContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDay() - 7
    );
    return expense.date > sevenDaysAgo;
  });
  return (
    <ExpenseOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      emptyExpensesText="There is no expenses in the last 7 days"
    />
  );
};

export default RecentExpence;
