// @flow

import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import Touchable from "../common/Touchable";
import Styles from "./Styles";

type Contact = {
  name: string,
  phoneNumber: string
};
type Props = {
  contact: Contact
};

export default function ContactItem(props: Props) {
  let { name, phoneNumber } = props.contact;

  function onPress() {
    Alert.alert("Contact pressed", `${name}: ${phoneNumber}`);
  }

  return (
    <Touchable style={Styles.contact} onPress={onPress}>
      <View style={Styles.contactPhoto}>
        <Text style={Styles.contactPhotoAlias}>{name[0]}</Text>
      </View>

      <View style={Styles.contactDetails}>
        <Text style={Styles.contactName}>{name}</Text>
        <Text>{phoneNumber}</Text>
      </View>
    </Touchable>
  );
}
