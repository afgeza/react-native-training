// @flow

import React from "react";
import { ScrollView } from "react-native";
import Styles from "./Styles";
import ContactData from "./ContactData";
import ContactItem from "./ContactItem";

export default function ContactScene() {
  return (
    <ScrollView style={Styles.contactList}>
      {ContactData.map((contact, index) => {
        return <ContactItem key={index} contact={contact} />;
      })}
    </ScrollView>
  );
}
