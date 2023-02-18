import { View, Text } from "react-native";
import React from "react";
import AllEntries from "./AllEntries";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="All Entries" component={AllEntries}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
