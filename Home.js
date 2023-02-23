import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, View } from "react-native";
// export type BottomTabList={
//     AllEntriesTab: undifined;
//     OverLimitEntriesTab: undifined;
// }
const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    // <View>

    <Tab.Navigator>
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
    </Tab.Navigator>
    // </View>
  );
}
