import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const ExpenseOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodTitle={expensesPeriod} />
      <ExpenseList expenses={expenses} />
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
