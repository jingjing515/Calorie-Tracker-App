import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import EditEntry from "./EditEntry";
import PressableButton from "./components/PressableButton";

export default function OverLimitEntries({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OverLimitEntries</Text>

      <PressableButton
        buttonPressed={() => navigation.navigate("AddAnEntry")}
        pressedStyle={styles.pressedStyle}
        customizedStyle={styles.button}
      >
        <Text>Add</Text>
      </PressableButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
