import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { ExpenseContext } from "../context/expense_context";
import ExpenseForm from "../components/Form/ExpenseForm";
import { deleteExp, storeExpense, updateExp, } from "../Util/http";
interface ManageExpenseProps {
  route: any;
  navigation: any;
}
const ManageExpense: React.FC<ManageExpenseProps> = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  const defaultValues = expenseCtx.expenses.find(
    (expense) => expense.id === expenseId
  );
  async function deleleHandler() {
    expenseCtx.deleteExpense(expenseId);
    await deleteExp(expenseId)
    navigation.goBack();
  }
  async function confirmHandler(expenseData) {
    if (isEditing) {
      expenseCtx.updateExpense({
        id: expenseId,
        ...expenseData,
      });
      await updateExp(expenseData,expenseId)
    } else {
      const id = await storeExpense(expenseData)
      expenseCtx.addExpense({id:id,...expenseData});
    }
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        isEditing={isEditing}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={defaultValues}
      />
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
});
export default ManageExpense;
