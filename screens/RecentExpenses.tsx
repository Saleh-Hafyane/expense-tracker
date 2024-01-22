import React, { useContext, useEffect } from "react";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseContext } from "../context/expense_context";
import { getDateMinusDays } from "../Util/date";
import { fetchExpenses } from "../Util/http";

const RecentExpence = () => {
  const expensesCtx = useContext(ExpenseContext);
  useEffect(()=>{
    async function fetch(){
      const fetchedExpenses = await fetchExpenses()
      expensesCtx.setExpense(fetchedExpenses)
    }
    fetch()
  },[])
  
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
