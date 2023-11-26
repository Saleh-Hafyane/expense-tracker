import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({ label, textInputConfig }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    padding: 6,
    borderRadius: 6,
    fontSize: 19,
  },
});
export default Input;
