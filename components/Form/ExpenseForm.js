import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { ExpenseContext } from "../../context/expense_context";
import { getFormattedDate } from "../../Util/date";

const ExpenseForm = ({ isEditing, onSubmit, onCancel, defaultValues }) => {
  const expenseCtx = useContext(ExpenseContext);
  const [inputValues, setInputValues] = useState({
    title: defaultValues ? defaultValues.title : "",
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
  });
  const inputChangeHangler = (id, enteredValue) => {
    setInputValues((values) => {
      return { ...values, [id]: enteredValue };
    });
  };
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      title: inputValues.title,
      date: new Date(inputValues.date),
    };
    if (
      !isNaN(expenseData.amount) &&
      expenseData.title.trim().length > 0 &&
      expenseData.date !== "Invalid Date"
    ) {
      onSubmit(expenseData);
    } else {
      Alert.alert("Invalid Inputs", "Please enter valid inputs");
    }
  }

  return (
    <View>
      <Input
        label="Title"
        textInputConfig={{
          value: inputValues.title,
          onChangeText: inputChangeHangler.bind(this, "title"),
        }}
      />
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",

          onChangeText: inputChangeHangler.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputChangeHangler.bind(this, "date"),
          value: inputValues.date,
        }}
      />
      <View>
        <Button mode="light" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
  },
});
export default ExpenseForm;
