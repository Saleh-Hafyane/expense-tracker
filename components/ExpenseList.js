import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);
const ExpenseList = ({ expenses }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={expenses}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ExpenseList;
