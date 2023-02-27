import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "./Firebase/firebase-setup";
import PressableButton from "./components/PressableButton";
import { styles } from "./components/Styles";
const Tab = createBottomTabNavigator();
const entry = [
  { calories: 300, description: "lunch" },
  { calories: 600, description: "snack" },
];
export default function Home({ navigation }) {
  function entryPressed(pressedEntry) {
    // console.log("pressed ", pressedId);
    navigation.navigate("EditEntry", { entryItem: pressedEntry });
  }
  return (
    <Tab.Navigator
      screenOptions={{
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
      }}
    >
      {/* useEffect(() =>
      {navigation.setOptions({
        // title: route.params.Tab.Screen.name,
        headerRight: () => {
          return (
            <PressableButton
              buttonPressed={() => navigation.navigate("AddAnEntry")}
              pressedStyle={styles.pressedStyle}
              customizedStyle={styles.button}
            >
              <Ionicons name="add" size={30} color="#eee" />
            </PressableButton>
          );
        },
      })}
      ) */}
      <Tab.Screen
        name="AllEntries"
        // component={AllEntries}
        children={() => <AllEntries navigation={navigation} entry={entry} />}
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
          <OverLimitEntries navigation={navigation} entry={entry} />
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
