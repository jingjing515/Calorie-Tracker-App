import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { Ionicons } from "@expo/vector-icons";

// export default function EntriesList(list, onListPress) {
//   function listPressed() {
//     onListPress(list.id);
//   }
//   return (
//     <View>
//       <Text>EntriesList</Text>
 
//       <Pressable
//         style={({ pressed }) => {
//           return [styles.textContainer, pressed && styles.pressedStyle];
//           // return pressed ? styles.pressedStyle : null;
//           // if (pressed)
//           // {
//           //   return styles.pressedStyle
//           // }
//         }}
//         android_ripple={{ color: "red" }}
//         onPress={() => onListPress(list)}
//       >
//         <Text style={styles.text}>{list.text}</Text>
//         <Button
//           title="X"
//           onPress={() => {
//             onDelete(goal.id);
//           }}
//           color="black"
//         /> 
//          <PressableButton
//           // customizedStyle={styles.deleteButton}
//           pressedStyle={styles.pressedStyle}
//           buttonPressed={listPressed}
//         >
//            <Text>X</Text> 
//         </PressableButton>
//       </Pressable> 


//     </View>
//   );
// }


import { View, Text } from 'react-native'
import React from 'react'

export default function EntriesList({navigation}) {
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "goals"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setGoals([]);
        } else {
          let goalsFromDB = [];
          querySnapshot.docs.forEach((snapDoc) => {
            goalsFromDB.push({ ...snapDoc.data(), id: snapDoc.id });
          });
          console.log(goalsFromDB);
          setGoals(goalsFromDB);
        }
      }
    );

  // return (
  //   <View>
  //     <Text>EntriesList</Text>
  //   </View>
  // )
// }
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "purple",
    padding: 15,
  },
  textContainer: {
    backgroundColor: "#999",
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressedStyle: {
    backgroundColor: "#e9e",
    opacity: 0.5,
  },
  deleteButton: {
    paddingHorizontal: 5,
    backgroundColor: "#aaa",
  },
});
