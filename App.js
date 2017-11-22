// @flow

import React, { Component } from "react";
import { View } from "react-native";
import ContactScene from "./src/contact/ContactScene";
import Header from "./src/common/Header";
import Styles from "./Styles";

type Props = {};
type State = {
  activePage: string
};
const HOME = "home";
const BROWSE = "browse";
const SEARCH = "search";

export default class App extends Component<Props, State> {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={Styles.container}>
        <Header title="Contact" />
        <ContactScene />
      </View>
    );
  }
}
