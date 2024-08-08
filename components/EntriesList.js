import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { firestore } from "../Firebase/firebase-setup";
import { collection, onSnapshot } from "firebase/firestore";
import { deleteFromDB, writeToDB } from "../Firebase/firestoreHelper";
import EntriesItem from "./EntriesItem";

// export default function EntriesList({ type }) {
export default function EntriesList({ entries, navigation }) {
  console.log("entriesList works");
  console.log(entries);
  // const [entries, setEntries] = useState([]);
  function entryPressed(entry) {
    navigation.navigate("EditEntry", entry);
  }
  return (
    <FlatList
      data={entries}
      renderItem={({ item }) => {
        return (
          <EntriesItem
            entries={item}
            onEntryPress={() => {
              entryPressed(item);
            }}
            // navigation={navigation}
          />
        );
      }}
    />
  );
}
