// @flow

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Touchable from "./Touchable";

const style = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#55f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff"
  }
});

export default function Button() {
  return (
    <Touchable style={style.button}>
      <Text style={style.buttonText}>Hello</Text>
    </Touchable>
  );
}
