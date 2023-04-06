import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "./Firebase/firebase-setup";
import PressableButton from "./components/PressableButton";
import { styles } from "./components/Styles";
import { collection, onSnapshot } from "firebase/firestore";
import { deleteFromDB, writeToDB } from "./Firebase/firestoreHelper";
const Tab = createBottomTabNavigator();
// const entries = [
//   { calories: 300, description: "lunch" },
//   { calories: 600, description: "snack" },
// ];

export default function Home({ navigation }) {
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setEntries([]);
        } else {
          let entriesFromDB = [];
          querySnapshot.docs.forEach((snapDoc) => {
            entriesFromDB.push({ ...snapDoc.data(), id: snapDoc.id });
          });
          console.log(entriesFromDB);
          setEntries(entriesFromDB);
        }
      }
    );
    // this is a cleanup function that will be called automatically when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  const [entries, setEntries] = useState([]);
  console.log(entries);
  function entryPressed(pressedEntry) {
    // console.log("pressed ", pressedId);
    navigation.navigate("EditEntry", { entryItem: pressedEntry });
  }
  return (
    <Tab.Navigator
      // tabBarOptions={{ tabBarBackground: "#303f9f" }}
      screenOptions={{
        // tabBarBackground: "#303f9f",
        headerStyle: { backgroundColor: "#303f9f" },
        headerTintColor: "#eee",
        headerTitleStyle: { fontSize: 20 },
        headerRight: () => (
          <PressableButton
            buttonPressed={() => navigation.navigate("AddAnEntry")}
            pressedStyle={styles.pressedStyle}
            customizedStyle={styles.addButton}
          >
            {/* ERROR  TypeError: navigation.navigate is not a function. (In 'navigation.navigate("AddAnEntry")', 'navigation.navigate' is undefined) */}
            <Ionicons name="add" size={30} style={{ color: "#eee" }} />
          </PressableButton>
        ),
        tabBarActiveBackgroundColor: "#303f9f",
        tabBarInactiveBackgroundColor: "#303f9f",
        tabBarActiveTintColor: "#eee",
        tabBarActiveTintColor: "#ffeb3b",
      }}
    >
      <Tab.Screen
        name="AllEntries"
        // component={AllEntries}
        children={() => (
          <AllEntries navigation={navigation} entries={entries} />
        )}
        options={{
          // headerShown: false,
          tabBarLabel: "All Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OverLimitEntries"
        // component={OverLimitEntries}
        children={() => (
          <OverLimitEntries navigation={navigation} entries={entries} />
        )}
        options={{
          // headerShown: false,
          tabBarLabel: "Over Limit Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      {/* console.log(firestore); */}
    </Tab.Navigator>
  );
  // </View>
}
