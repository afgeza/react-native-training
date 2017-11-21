// @flow

import React, { Component } from "react";
import { Text, View } from "react-native";
import Styles from "./Styles";

type Props = {
  title: string
};

export default class Header extends Component<Props> {
  render() {
    let { title } = this.props;
    return (
      <View style={Styles.headerOuter}>
        <Text style={Styles.headerTitle}>{title}</Text>
      </View>
    );
  }
}
