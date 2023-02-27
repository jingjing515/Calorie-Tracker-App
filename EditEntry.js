import { View, Text } from "react-native";
import React, { useEffect } from "react";
import PressableButton from "./components/PressableButton";
import { Ionicons } from "@expo/vector-icons";
import Card from "./components/Card";
import { styles } from "./components/Styles";
import { inputStyles } from "./components/Styles";
import EntriesItem from "./components/EntriesItem";
import { deleteFromDB } from "./Firebase/firestoreHelper";

export default function EditEntry({ entriesItem, navigation }) {
  function deletePressed(deletedId) {
    deleteFromDB(deletedId);
    navigation.navigate("Home");
  }
  function checkPressed() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Card>
        <Text style={inputStyles.editInput}>
          entries
          {/* {entriesItem} */}
          {/* {entries.description} */}
        </Text>
        {/* <EntriesItem entries={entries} /> */}
        <View style={inputStyles.buttonContainer}>
          <PressableButton
            customizedStyle={styles.button}
            pressedStyle={styles.pressedStyle}
            buttonPressed={deletePressed}
          >
            <Ionicons name="trash" size={30} style={{ color: "#eee" }} />
            {/* <Text>X</Text> */}
          </PressableButton>
          <PressableButton
            buttonPressed={checkPressed}
            pressedStyle={styles.pressedStyle}
            customizedStyle={styles.button}
          >
            <Ionicons name="checkmark" size={30} style={{ color: "#eee" }} />
          </PressableButton>
        </View>
      </Card>
    </View>
  );
}
