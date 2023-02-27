import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./Styles";

export default function EntriesItem({ entries, onEntryPress }) {
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
        onPress={() => onEntryPress(entries)}
      >
        <Text style={styles.text}>
          {entries.calories}
          {entries.description}
        </Text>
      </Pressable>
    </View>
  );
}
