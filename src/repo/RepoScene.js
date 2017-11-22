// @flow
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
  TextInput
} from "react-native";
import Styles from "./Styles.js";

type Props = {};
type State = {
  repositories: Array<string>,
  isLoading: boolean,
  username: string
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
      repositories: [],
      isLoading: false,
      username: ""
    };
  }

  async fetchNow() {
    let { username } = this.state;
    this.setState({ isLoading: true });
    let repoNames = await fetchRepositories(username);
    this.setState({
      repositories: [...repoNames],
      isLoading: false
    });
  }

  render() {
    let { repositories, isLoading, username } = this.state;
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <TextInput
          style={Styles.textInput}
          value={username}
          onChangeText={username => {
            this.setState({ username });
          }}
          onSubmitEditing={() => this.fetchNow()}
          returnKeyType="search"
        />
        <Text>Repositories:</Text>
        {repositories.length === 0 ? <Text>Nothing to display</Text> : null}
        {isLoading === true ? <ActivityIndicator size="large" /> : null}
        <ScrollView>
          {repositories.map((repo, i) => {
            console.log(repo);
            return <Text key={i}>{repo}</Text>;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default RepoScene;
