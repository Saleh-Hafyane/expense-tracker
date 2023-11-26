import { View, Text } from "react-native";
import React, { useContext } from "react";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseContext } from "../context/expense_context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);
  return (
    <ExpenseOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      emptyExpensesText="there is no expenses"
    />
  );
};

export default AllExpenses;
