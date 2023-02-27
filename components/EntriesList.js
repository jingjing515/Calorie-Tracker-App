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
export default function EntriesList({ entry, navigation }) {
  const [entries, setEntries] = useState([]);
  function entryPressed(entry) {
    navigation.navigate("EditEntry", { entry: entry });
  }
  return (
    <FlatList
      // contentContainerStyle={styles.contentContainerStyle}
      data={entry}
      renderItem={({ item }) => {
        return (
          // <Text>
          //   {item.calories}
          //   {item.description}
          // </Text>
          // onEntryPress={entryPressed}
          <EntriesItem
            entry={item}
            onEntryPress={entryPressed}
            // navigation={navigation}
          />
        );
      }}
    />
  );
}
//..

// useEffect(() => {
//   const unsubscribe = onSnapshot(
//     collection(firestore, "entries"),
//     (querySnapshot) => {
//       if (querySnapshot.empty) {
//         setEntries([]);
//       } else {
//         let entriesFromDB = [];
//         //add a condition
//         // if (type === "over") {
//         //   querySnapshot.docs.forEach((snapDoc) => {
//         //     if (snapDoc.data().enteredCalories > 500) {
//         //       entriesFromDB.push({ ...snapDoc.data(), id: snapDoc.id });
//         //     }
//         //   });
//         //   console.log(entriesFromDB);
//         //   setEntries(entriesFromDB);
//         // } else {
//         //   querySnapshot.docs.forEach((snapDoc) => {
//         //     entriesFromDB.push({ ...snapDoc.data(), id: snapDoc.id });
//         //   });
//         //   console.log(entriesFromDB);
//         //   setEntries(entriesFromDB);
//         // }
//         //condition over
//       }
//     }
//   );
// this is a cleanup function that will be called automatically when the component is unmounted
//   return () => {
//     unsubscribe();
//   };
// }, [type]);

// function entryPressed(pressedEntry) {
//   navigation.navigate("EditEntry", { enrty: pressedEntry });
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c5cae9",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContentsStyle: {
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 50,
    color: "#fff",
    padding: 15,
  },
  textContainer: {
    backgroundColor: "#303f9f",
    borderRadius: 5,
    marginBottom: 15,
    // marginVertical: 10,
    // marginHorizontal: 10,
    width: "100%",
    height: "10%",
  },
});
