import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import EditEntry from "./EditEntry";
import PressableButton from "./components/PressableButton";
import EntriesList from "./components/EntriesList";
import { styles } from "./components/Styles";

export default function OverLimitEntries({ navigation, entry }) {
  const overLimitEntry = entry.filter((item) => item.calories > 500); //if empty,entry=[]
  return (
    <View style={styles.container}>
      <EntriesList entry={overLimitEntry} navigation={navigation} />
    </View>
  );
}
