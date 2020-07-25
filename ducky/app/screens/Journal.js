import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class Journal extends Component {
  render() {
    return (
      <View>
        <Text>This is the journal screen</Text>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
      </View>
    )
  }
}

export default Journal;