import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={expenses}
        renderItem={({item}) => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ExpenseList;
