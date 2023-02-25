import { View, Text } from "react-native";
import React from "react";
import AllEntries from "./AllEntries";
import OverLimiEntries from "./OverLimitEntries";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditEntry from "./EditEntry";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import AddAnEntry from "./AddAnEntry";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#a5a" },
          headerTintColor: "#eee",
          headerTitleStyle: { fontSize: 20 },
        }}
      >
        {/* <Stack.Screen name="Home" component={Home} /> */}

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddAnEntry" component={AddAnEntry} />
        <Stack.Screen name="Edit Entry" component={EditEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
