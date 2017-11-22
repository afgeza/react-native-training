// @flow
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator
} from "react-native";

const USERNAME1 = "danielsukmana";
const USERNAME2 = "sstur";
const usernames = ["danielsukmana", "sstur", "afgeza"];

type Props = {};
type State = {
  repositories: Array<string>,
  isLoading: boolean
};

async function fetchRepositories(username: string) {
  let response = await fetch(`https://api.github.com/users/${username}/repos`);
  let data = await response.json();
  return data.map(repo => repo.name);
}

class RepoScene extends Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      repositories: []
    };
  }

  async fetchNow() {
    this.setState({
      isLoading: true
    });
    let [listOne, listTwo, listThree] = await Promise.all(
      usernames.map(username => {
        return fetchRepositories(username);
      })
    );
    this.setState({
      repositories: [...listOne, ...listTwo, ...listThree],
      isLoading: false
    });
  }

  render() {
    let repositories = this.state.repositories;
    return (
      <View style={{ backgroundColor: "#eee", padding: 20, flex: 1 }}>
        <Text>Repositories:</Text>
        {repositories.length === 0 ? <Text>Nothing to display</Text> : null}
        {this.state.isLoading === true ? (
          <ActivityIndicator size="large" />
        ) : null}
        <ScrollView style={{ flex: 1 }}>
          {repositories.map((repoName, i) => <Text key={i}>{repoName}</Text>)}
        </ScrollView>
        <Button title="Fetch Data" onPress={() => this.fetchNow()} />
      </View>
    );
  }
}

export default RepoScene;
