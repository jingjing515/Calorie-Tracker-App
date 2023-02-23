import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import EditEntry from "./EditEntry";

export default function OverLimitEntries({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OverLimitEntries</Text>
      <Button
        title="Add An Entry"
        onPress={() => navigation.navigate("AddAnEntry")}
      />
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
