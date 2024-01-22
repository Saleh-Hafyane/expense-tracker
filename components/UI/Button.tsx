import React, { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  mode?: "default" | "light";
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ children, onPress, mode = "default", style }) => {
  return (
      <View style={style}>
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
          <View style={[styles.button, mode === "light" && styles.light]}>
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
