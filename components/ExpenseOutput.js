import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e2",
    title: "two pieces of butter",
    amount: 28.22,
    date: new Date("2023-11-02"),
  },
  {
    id: "e3",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e4",
    title: "two pieces of butter",
    amount: 63.22,
    date: new Date("2023-01-10"),
  },
  {
    id: "e5",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e6",
    title: "two pieces of butter",
    amount: 203.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e7",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e8",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
];
const ExpenseOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodTitle={expensesPeriod} />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
  },
});
export default ExpenseOutput;
