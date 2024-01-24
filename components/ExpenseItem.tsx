import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { getFormattedDate } from "../Util/date";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface ExpenseItemProps {
  id: number;
  title: string;
  amount: number;
  date: Date;
}
type RootStackParamList = {
  ManageExpense: { expenseId: number };

};


type ExpenseItemNavigationProp = NativeStackNavigationProp<RootStackParamList, "ManageExpense">;


const ExpenseItem: React.FC<ExpenseItemProps> = ({ id, title, amount, date }) => {

  const navigation = useNavigation<ExpenseItemNavigationProp>();

  const pressableHandler = () => {
    navigation.navigate("ManageExpense", { expenseId: id });
  };

  return (
      <Pressable
          onPress={pressableHandler}
          style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount}</Text>
          </View>
        </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 17,
    marginHorizontal:20,
    backgroundColor: "#F3B664",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 30,
    elevation: 5,
    shadowRadius: 30,
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
