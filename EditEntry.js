import { View, Text } from "react-native";
import React, { useEffect } from "react";
import PressableButton from "./components/PressableButton";
import { Ionicons } from "@expo/vector-icons";
import Card from "./components/Card";
import { styles } from "./components/Styles";

export default function EditEntry({ entry, navigation }) {
  function onSubmitEntered(changedText) {
    console.log(changedText);
    navigation.navigate("Home");
  }
  function onDeleteEntered(changedText) {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Card>
        {/* <Text>EditEntry</Text> */}
        <Text style={styles.text}>
          {entry}
          {/* {entry.description} */}
        </Text>
      </Card>
    </View>
  );
}
