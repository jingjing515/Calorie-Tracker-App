import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { styles, inputStyles } from "./Styles";

export default function EntriesItem({ entries, onEntryPress }) {
  console.log("entries", entries);
  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          return [styles.textContainer, pressed && styles.pressedStyle];
        }}
        android_ripple={{ color: "#7986cb" }}
        onPress={onEntryPress}
      >
        <View style={styles.textContainer}>
          {/* <View style={inputStyles.container}> */}
          <Text style={styles.text}>{entries.text.enteredDescription}</Text>
          <Text style={styles.calorieStyle}>
            {entries.review === false && entries.text.enteredCalories > 500 && (
              <Ionicons name="warning" size={30} style={{ color: "#eee" }} />
            )}

            {entries.text.enteredCalories}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
