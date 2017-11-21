// @flow

import React, { Component } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import Styles from "./Styles";
import Touchable from "./src/Touchable";

let contacts: Array<Object> = [
  { name: "Abu", phoneNumber: "08123456789" },
  { name: "Bambang", phoneNumber: "08234567890" }
];

function Contact(props) {
  let { contact } = props;
  let onPress = () =>
    Alert.alert("Contact pressed", `${contact.name}: ${contact.phoneNumber}`);

  return (
    <Touchable onPress={onPress}>
      <View style={Styles.contact}>
        <View style={Styles.contactPhoto}>
          <Text style={Styles.contactPhotoAlias}>{contact.name[0]}</Text>
        </View>
        <View style={Styles.contactDetails}>
          <Text style={Styles.contactName}>{contact.name}</Text>
          <Text>{props.contact.phoneNumber}</Text>
        </View>
      </View>
    </Touchable>
  );
}

function App() {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Contact List</Text>
      </View>

      <ScrollView style={Styles.contactList}>
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </ScrollView>
    </View>
  );
}

export default App;
