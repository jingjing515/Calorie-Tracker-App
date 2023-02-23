import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Keyboard,
} from "react-native";
import { useState } from "react";
import Input from "./components/Input";

export default function AddAnEntry(navigation) {
  function onDataEntered(data) {
    sendData(data);
  }
  return (
    <View>
      <Input sendData={onDataEntered} />
    </View>
  );
}
