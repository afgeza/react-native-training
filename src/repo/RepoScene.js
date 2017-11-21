// @flow

import React, { Component } from "react";
import { Text, View, Button, Alert } from "react-native";
import Styles from "./Styles";

type Props = {};
type State = {
  repos: Array<Repo>,
  username: string
};
type Repo = {
  name: string,
  description: string
};

export default class RepoScene extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      repos: [],
      username: "afgeza"
    };
  }

  render() {
    let username = this.state.username;

    let fetchData = async () => {
      let response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      let data = await response.json();
      this.setState({
        repos: data
      });
    };

    return (
      <View style={Styles.container}>
        {this.state.repos.map((repo, i) => {
          return (
            <Button
              title={repo.name}
              onPress={() => Alert.alert("Description", repo.description)}
            />
          );
        })}
        <Button style={Styles.fetchButton} title="Fetch" onPress={fetchData} />
      </View>
    );
  }
}
