import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { styles } from "./Styles";

export default function PressableButton({
  buttonPressed,
  customizedStyle,
  pressedStyle,
  children,
}) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          styles.pressableDefault,
          customizedStyle,
          pressed && pressedStyle,
        ];
      }}
      onPress={buttonPressed}
    >
      {children}
    </Pressable>
  );
}
