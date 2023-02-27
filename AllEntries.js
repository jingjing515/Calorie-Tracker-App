import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import EditEntry from "./EditEntry";
import PressableButton from "./components/PressableButton";
import { firestore } from "./Firebase/firebase-setup";
import { deleteFromDB, writeToDB } from "./Firebase/firestoreHelper";
import EntriesList from "./components/EntriesList";
import { styles } from "./components/Styles";

export default function AllEntries({ navigation, entry }) {
  // function listPressed(pressedList) {
  //   navigation.navigate("EditEntry");
  // }
  // const [ca]
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <PressableButton
        buttonPressed={() => navigation.navigate("AddAnEntry")}
        pressedStyle={styles.pressedStyle}
        customizedStyle={styles.button}
      >
        <Text>Add</Text>
      </PressableButton> */}
      <EntriesList entry={entry} />
      {/* <EntriesList type="all" /> */}
      {/* <PressableButton
        buttonPressed={() => navigation.navigate("EditEntry")}
        pressedStyle={styles.pressedStyle}
        customizedStyle={styles.button}
      >
        <Text>editEntry</Text>
      </PressableButton> */}
      {/* <ScrollView
        // alwaysBounceVertical={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {data.map((data) => {
          return (
            <View key={data.id} style={styles.textContainer}>
              <Text style={styles.text}>{data.text}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}
