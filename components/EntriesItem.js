import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function EntriesItem(entry, onEntryPress) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          return [styles.textContainer, pressed && styles.pressedStyle];
          // return pressed ? styles.pressedStyle : null;
          // if (pressed)
          // {
          //   return styles.pressedStyle
          // }
        }}
        android_ripple={{ color: "red" }}
        onPress={() => onGoalPress(goal)}
      >
        <Text style={styles.text}>{goal.text}</Text>
      </Pressable>
    </View>
  );
}
