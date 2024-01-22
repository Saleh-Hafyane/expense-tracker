import { View, StyleSheet, Alert } from "react-native";
import React, { useContext, useState } from "react";
import Input from "./Input";
import Button from "../UI/Button";
import { ExpenseContext } from "../../context/expense_context";
import { getFormattedDate } from "../../Util/date";

interface ExpenseFormProps {
    isEditing: boolean;
    onSubmit: (data: { amount: number; title: string; date: Date }) => void;
    onCancel: () => void;
    defaultValues?: { title: string; amount: string; date: Date };
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
                                                     isEditing,
                                                     onSubmit,
                                                     onCancel,
                                                     defaultValues,
                                                 }) => {
    const expenseCtx = useContext(ExpenseContext);

    const [inputValues, setInputValues] = useState({
        title: defaultValues ? defaultValues.title : "",
        amount: defaultValues ? defaultValues.amount.toString() : "",
        date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    });

    const inputChangeHandler = (id: string, enteredValue: string) => {
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
            expenseData.date.toString() !== "Invalid Date"
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
                    onChangeText: inputChangeHandler.bind(this, "title"),
                }}
            />
            <Input
                label="Amount"
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: inputChangeHandler.bind(this, "amount"),
                    value: inputValues.amount,
                }}
            />
            <Input
                label="Date"
                textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, "date"),
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
