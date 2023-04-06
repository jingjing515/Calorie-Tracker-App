import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Keyboard,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Input from "./components/Input";
import { writeToDB } from "./Firebase/firestoreHelper";
import EntriesList from "./components/EntriesList";
import { styles } from "./components/Styles";

export default function AddAnEntry({ navigation }) {
  // const [calories, setCalories] = useState([]);
  // const [description, setDescription] = useState([]);

  function onTextEntered(changedText) {
    // setEnteredText(changedText);
    // update goals array with the new text
    const newData = { text: changedText, review: false };

    console.log(newData);
    writeToDB(newData);

    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      {/* <Text>addanentry</Text> */}
      <Input sendChangedText={onTextEntered} />
    </View>
  );
}
