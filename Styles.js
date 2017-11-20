// @flow

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  contact: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  contactPhoto: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#bbb",
    justifyContent: "center",
    alignItems: "center"
  },
  contactPhotoAlias: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  contactDetails: {
    width: 280,
    height: 60,
    justifyContent: "space-around"
  },
  contactName: {
    fontWeight: "bold",
    fontSize: 18
  }
});

export default Styles;
