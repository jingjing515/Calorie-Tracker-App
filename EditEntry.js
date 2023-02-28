import { View, Text, Alert } from "react-native";
import React, { useEffect } from "react";
import PressableButton from "./components/PressableButton";
import { Ionicons } from "@expo/vector-icons";
import Card from "./components/Card";
import { styles } from "./components/Styles";
import { inputStyles } from "./components/Styles";
import EntriesItem from "./components/EntriesItem";
import { deleteFromDB, changeReviewStatus } from "./Firebase/firestoreHelper";
import OverLimitEntries from "./OverLimitEntries";

export default function EditEntry({ route, navigation }) {
  console.log(route.params);
  function onDeletePressed() {
    Alert.alert("Delete", "Are you sure you want to delete this?", [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: deletePressed,
      },
    ]);
  }
  function onCheckPressed() {
    Alert.alert(
      "Important",
      "Are you sure you want to mark this item as reviewed?",
      [
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: checkPressed,
        },
      ],
      {}
    );
  }
  function deletePressed() {
    deleteFromDB(route.params.id);
    navigation.navigate("Home");
  }
  function checkPressed() {
    changeReviewStatus(route.params.id);
    navigation.navigate("Home", { screen: "OverLimitEntries" });
    // , { screen: "OverLimitEntries" }
  }
  return (
    <View style={styles.container}>
      <Card>
        <View style={inputStyles.container}>
          <Text style={inputStyles.editInput}>
            <Text style={inputStyles.editTitle}>Calories: </Text>
            {route.params.text.enteredCalories}
          </Text>
          <Text style={inputStyles.editInput}>
            <Text style={inputStyles.editTitle}>Description: </Text>
            {route.params.text.enteredDescription}
          </Text>

          {route.params.text.enteredCalories > 500 &&
            route.params.review == false && (
              <View style={inputStyles.buttonContainer}>
                <PressableButton
                  customizedStyle={styles.button}
                  pressedStyle={styles.pressedStyle}
                  buttonPressed={onDeletePressed}
                >
                  <Ionicons name="trash" size={30} style={{ color: "#eee" }} />
                  {/* <Text>X</Text> */}
                </PressableButton>
                <PressableButton
                  buttonPressed={onCheckPressed}
                  pressedStyle={styles.pressedStyle}
                  customizedStyle={styles.button}
                >
                  <Ionicons
                    name="checkmark"
                    size={30}
                    style={{ color: "#eee" }}
                  />
                </PressableButton>
              </View>
            )}

          {(route.params.text.enteredCalories <= 500 ||
            (route.params.text.enteredCalories > 500 &&
              route.params.review)) && (
            <View style={inputStyles.buttonContainer}>
              <PressableButton
                customizedStyle={styles.button}
                pressedStyle={styles.pressedStyle}
                buttonPressed={onDeletePressed}
              >
                <Ionicons name="trash" size={30} style={{ color: "#eee" }} />
                {/* <Text>X</Text> */}
              </PressableButton>
            </View>
          )}
        </View>
      </Card>
    </View>
  );
}
