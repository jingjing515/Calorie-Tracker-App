import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditEntry from "./EditEntry";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import AddAnEntry from "./AddAnEntry";
import PressableButton from "./components/PressableButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#303f9f" },
          headerTintColor: "#eee",
          headerTitleStyle: { fontSize: 20 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="AddAnEntry" component={AddAnEntry} />
        <Stack.Screen name="EditEntry" component={EditEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
