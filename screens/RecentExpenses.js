import { View, Text } from "react-native";
import React from "react";
import ExpenseOutput from "../components/ExpenseOutput";

const RecentExpence = () => {
  return <ExpenseOutput expensesPeriod="Last 14 Days" />;
};

export default RecentExpence;
