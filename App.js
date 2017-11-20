// @flow

import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Styles from "./Styles";

let contacts: Array<Object> = [
  { name: "Abu", phoneNumber: "08123456789" },
  { name: "Bambang", phoneNumber: "08234567890" }
];

function Contact(props) {
  return (
    <View style={Styles.contact}>
      <View style={Styles.contactPhoto}>
        <Text style={Styles.contactPhotoAlias}>{props.contact.name[0]}</Text>
      </View>
      <View style={Styles.contactDetails}>
        <Text style={Styles.contactName}>{props.contact.name}</Text>
        <Text>{props.contact.phoneNumber}</Text>
      </View>
    </View>
  );
}

function App() {
  return (
    <ScrollView style={Styles.container}>
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </ScrollView>
  );
}

export default App;
