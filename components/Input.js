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

export default function Input({ sendData }) {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  function resetInput() {
    setCalories("");
    setDescription("");
  }
  function checkCalories(calories) {
    if (isNaN(calories) || calories < 0) {
      alert("Invalid Input");
    }
    setCalories("");
    // return false;
  }
  //   return true;

  function checkDescription(description) {
    if ((description, length == 0)) {
      alert("Invalid description");
    }
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
        <View style={inputStyles.button}>
          <Button
            title="Reset"
            onPress={() => {
              resetInput();
            }}
          />
        </View>

        <View style={inputStyles.button}>
          <Button
            title="Submit"
            onPress={() => {
              const caloriesValid = checkCalories(calories);
              const descriptionValid = checkDescription(description);
              if (descriptionValid && caloriesValid) {
                sendData({
                  enteredcalories: calories,
                  entereddescription: description,
                });
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}
