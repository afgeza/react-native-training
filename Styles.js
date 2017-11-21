// @flow

import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1
  },
  contact: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 0
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
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  headerTitle: {
    fontSize: 30
  },
  contactList: {
    paddingLeft: 15
  }
});

export default Styles;
