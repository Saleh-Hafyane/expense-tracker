import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode == "light" && styles.light]}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#EC8F5E",
  },
  light: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#F3B664",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.8,
  },
});
export default Button;
