import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import EditEntry from "./EditEntry";
import PressableButton from "./components/PressableButton";
import EntriesList from "./components/EntriesList";
import { styles } from "./components/Styles";

export default function OverLimitEntries({ navigation, entries }) {
  function checkEmpty() {
    let overLimitEntry = [];
    if (entries.length) {
      overLimitEntry = entries.filter(
        (item) => item.text.enteredCalories > 500 && item.review === false
      );
    }
    return overLimitEntry;
  }
  const overLimitEntry = checkEmpty(); //if empty,entry=[]
  return (
    <View style={styles.container}>
      <EntriesList entries={overLimitEntry} navigation={navigation} />
    </View>
  );
}
