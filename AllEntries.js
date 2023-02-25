import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import EditEntry from "./EditEntry";
import PressableButton from "./components/PressableButton";
//error 500 Unable to resolve "./PressableButton" from "EditEntry.js"
export default function AllEntries({ navigation }) {
  function listPressed(pressedList) {
    navigation.navigate("EditEntry");
  }
  // const [ca]
  return (
    <View style={styles.container}>
      <Text>AllEntries</Text>
      <StatusBar style="auto" />
      <PressableButton
        buttonPressed={() => navigation.navigate("AddAnEntry")}
        pressedStyle={styles.pressedStyle}
        customizedStyle={styles.button}
      >
        <Text>Add</Text>
      </PressableButton>
      {/* <ScrollView
        // alwaysBounceVertical={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {calories.map((calories) => {
          return (
            <View key={calories.id} style={styles.textContainer}>
              <Text style={styles.text}>{calories.text}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
