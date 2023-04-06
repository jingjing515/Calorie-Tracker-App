import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { styles } from "./Styles";

export default function Card(props) {
  return <View style={styles.cardStyle}>{props.children}</View>;
}
