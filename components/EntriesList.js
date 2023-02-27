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

// export default function EntriesList({ type }) {
export default function EntriesList({ entry }) {
  const [entries, setEntries] = useState([]);

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
  //         //try
  //         // if (type === "all") {
  //         //   firestore
  //         //     .collection("entries")
  //         //     .get()
  //         //     .then((querySnapshot) => {
  //         //       let entries = [];
  //         //       querySnapshot.forEach((doc) => {
  //         //         entries.push({ ...snapDoc.data(), id: snapDoc.id });
  //         //       });
  //         //       setEntries(entries);
  //         //       console.log(entries);
  //         //     });
  //         // } else {
  //         //   firestore
  //         //     .collection("entries")
  //         //     .where("enteredCalories", ">", 500)
  //         //     .get()
  //         //     .then((querySnapshot) => {
  //         //       let entries = [];
  //         //       querySnapshot.forEach((doc) => {
  //         //         entries.push({ ...snapDoc.data(), id: snapDoc.id });
  //         //       });
  //         //       setEntries(entries);
  //         //       console.log(entries);
  //         //     });
  //         // }

  //         //try over
  //       }
  //     }
  //   );
  // this is a cleanup function that will be called automatically when the component is unmounted
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [type]);

  return (
    <FlatList
      // contentContainerStyle={styles.contentContainerStyle}
      data={entry}
      renderItem={({ item }) => {
        return (
          <Text>
            {item.calories}
            {item.description}
          </Text>
        );
      }}
    />
  );
}

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
