import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
interface ExpenseOutputProps {
  expenses: Array<any>;
  expensesPeriod: string;
  emptyExpensesText: string;
}
const ExpenseOutput : React.FC<ExpenseOutputProps> = ({ expenses, expensesPeriod, emptyExpensesText }) => {

  const ExpensesFound = () => {
    if (expenses.length > 0) {
      return <ExpenseList expenses={expenses} />;
    } else {
      return <Text>{emptyExpensesText}</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodTitle={expensesPeriod} />
      <ExpensesFound />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
export default ExpenseOutput;
