import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { getFormattedDate } from "../Util/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, title, amount, date }) => {
  const navigation = useNavigation();
  const pressableHandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };
  return (
    <Pressable
      onPress={pressableHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};
styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#F3B664",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 4,
    elevation: 2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#EC8F5E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    fontWeight: "900",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.9,
  },
});
export default ExpenseItem;
