import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { firestore } from "./Firebase/firebase-setup";
import PressableButton from "./components/PressableButton";
const Tab = createBottomTabNavigator();

export default function Home({ route, navigation }) {
  return (
    // <View>
    <Tab.Navigator
      screenOptions={() => ({
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
        component={AllEntries}
        options={{
          headerShown: false,
          tabBarLabel: "All Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OverLimitEntries"
        component={OverLimitEntries}
        options={{
          headerShown: false,
          tabBarLabel: "Over Limit Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      {/* console.log(firestore); */}
    </Tab.Navigator>
    // </View>
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
