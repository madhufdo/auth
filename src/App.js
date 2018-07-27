import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {header} from './components/common';

class App extends Component {
  render() {
    return (
    <Header headerText="Authentication" />
    <View>
      <Text> An App </Text>
    </View>
    );
  }
}

export default App;
