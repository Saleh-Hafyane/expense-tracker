import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ExpenseSummary = ({ expenses, periodTitle }) => {
  const sumExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{periodTitle}</Text>
      <Text style={styles.sum}>${sumExpenses.toFixed(2)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 7,
    backgroundColor: "#F1EB90",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: "#EC8F5E",
    fontWeight: "900",
  },
  sum:{
    fontSize: 18,
    color: "#EC8F5E",
    fontWeight: "900",
  }
});

export default ExpenseSummary;
