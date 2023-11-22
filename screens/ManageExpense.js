import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { ExpenseContext } from "../context/expense_context";
const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  function deleleHandler() {
    expenseCtx.addExpense(expenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(expenseId, {
        title: "testtt",
        amount: 444.44,
        date: new Date("2023-10-21"),
      });
    } else {
      expenseCtx.addExpense({
        title: "test",
        amount: 33.44,
        date: new Date("2023-11-21"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View>
        <Button mode="light" style={styles.button} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color="#EC8F5E"
            size={46}
            onPress={deleleHandler}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#EC8F5E",
    alignItems: "center",
  },
  button: {
    marginVertical: 8,
  },
});
export default ManageExpense;
