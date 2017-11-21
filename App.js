// @flow

import React, { Component } from "react";
import { Text, View, ScrollView, Alert, Button } from "react-native";
import Touchable from "./src/common/Touchable";
import RepoScene from "./src/repo/RepoScene";
import ContactScene from "./src/contact/ContactScene";
import Header from "./src/common/Header";
import Styles from "./Styles";

export default function App(): Object {
  return (
    <View style={Styles.container}>
      <Header title="Repo" />
      <RepoScene />
    </View>
  );
}
