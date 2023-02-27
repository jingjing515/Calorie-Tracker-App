import { View, Text } from "react-native";
import React, { useEffect } from "react";
import PressableButton from "./components/PressableButton";
import { Ionicons } from "@expo/vector-icons";
import Card from "./components/Card";

export default function EditEntry({ navigation }) {
  function onSubmitEntered(changedText) {
    console.log(changedText);
    navigation.navigate("Home");
  }
  function onDeleteEntered(changedText) {
    navigation.navigate("Home");
  }
  return (
    <View>
      <Card>
        <Text>EditEntry</Text>
        <Input sendChangedText={onTextEntered} />
      </Card>
    </View>
  );
}
