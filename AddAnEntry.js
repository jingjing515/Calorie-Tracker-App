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

export default function AddAnEntry({ navigation }) {
  const [calories, setCalories] = useState([]);
  const [description, setDescription] = useState([]);
  //   function onDataEntered(data) {
  //     sendChangedText(data);
  //   }
  function onTextEntered(changedText) {
    // setEnteredText(changedText);
    // update goals array with the new text
    const newData = { text: changedText, id: Math.random() };

    // const newArray = [...goals, newGoal];
    setCalories((prevCalories) => {
      return [...prevCalories, newData];
    });
    console.log(changedText);
    navigation.navigate("Home");
  }

  return (
    <View>
      {/* <Text>addanentry</Text> */}
      <Input sendChangedText={onTextEntered} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    alignItems: "center",

    // alignSelf: "stretch",
  },
  scrollContentsStyle: {
    alignItems: "center",
  },
  text: {
    fontSize: 80,
    color: "purple",

    padding: 15,
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
    marginBottom: 15,
  },
});
