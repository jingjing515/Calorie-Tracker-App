import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { inputStyles } from "./Styles";
import PressableButton from "./PressableButton";

export default function Input({ sendChangedText }) {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  function resetInput() {
    setCalories("");
    setDescription("");
  }
  function checkCalories(calories) {
    if (isNaN(calories) || calories < 0 || calories === "") {
      alert("Invalid input.");
      return false;
    }
    setCalories("");
    return true;
  }

  function checkDescription(description) {
    if (description === "") {
      alert("Invalid input.");
      return false;
    }
    setDescription("");
    return true;
  }

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.title}>Calories</Text>
      <TextInput
        value={calories}
        onChangeText={(calories) => {
          setCalories(calories);
        }}
        style={inputStyles.input}
        maxLength={10}
      />

      <Text style={inputStyles.title}>Description</Text>
      <TextInput
        style={inputStyles.input}
        value={description}
        onChangeText={(description) => {
          setDescription(description);
        }}
      />

      <View style={inputStyles.buttonContainer}>
        {/* <View style={inputStyles.button}> */}

        <PressableButton
          buttonPressed={() => {
            resetInput();
          }}
          pressedStyle={styles.pressedStyle}
          customizedStyle={styles.button}
        >
          <Text>Reset</Text>
        </PressableButton>
      </View>

      {/* <View style={inputStyles.button}> */}

      <PressableButton
        buttonPressed={() => {
          const caloriesValid = checkCalories(calories);
          const descriptionValid = checkDescription(description);
          console.log(caloriesValid);
          if (descriptionValid && caloriesValid) {
            sendChangedText({
              enteredcalories: calories,
              entereddescription: description,
            });
          }
          // submitPressed();
        }}
        pressedStyle={styles.pressedStyle}
        customizedStyle={styles.button}
      >
        <Text>Submit</Text>
      </PressableButton>
    </View>
    // </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    // borderBottomColor: "#552055",
    // borderBottomWidth: 2,
    width: "50%",
    marginVertical: 10,
    borderColor: "#552055",
    borderWidth: 2,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  pressedStyle: {
    opacity: 100,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f5f5aa",
  },
});
