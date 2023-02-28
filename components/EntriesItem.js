import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./Styles";

export default function EntriesItem({ entries, onEntryPress }) {
  console.log("entries", entries);
  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          return [styles.textContainer, pressed && styles.pressedStyle];
        }}
        android_ripple={{ color: "red" }}
        onPress={onEntryPress}
      >
        <Text style={styles.text}>
          {entries.text.enteredCalories}
          {entries.review === false && entries.text.enteredCalories > 500 && (
            <Ionicons name="add" size={30} style={{ color: "#eee" }} />
          )}

          {entries.text.enteredDescription}
        </Text>
      </Pressable>
    </View>
  );
}
