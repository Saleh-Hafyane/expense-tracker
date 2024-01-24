import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ExpenseSummary = ({ expenses, periodTitle }) => {
  const sumExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{periodTitle}</Text>
      <Text style={styles.sum}>${sumExpenses.toFixed(2)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderBottomStartRadius:30,
    borderBottomEndRadius:30,
    backgroundColor: "#F1EB90",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation:5,

  },
  title: {
    fontSize: 25,
    color: "#EC8F5E",
    fontWeight: "700",
  },
  sum:{
    fontSize: 30,
    color: "#EC8F5E",
    fontWeight: "900",
  }
});

export default ExpenseSummary;
