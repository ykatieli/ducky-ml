import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export class Analytics extends Component {
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#6B8DB2', '#7998B9']}>
        <Text style={styles.h4_white}>This is the analytics screen</Text>
       
        {/* Dock */}
        <View style={styles.dock_container}>
          <View style={styles.dock}>
            <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
            <Button onPress={() => this.props.navigation.navigate('HabitTrackerScreen')} title="Habit Tracker"/>
            <Button onPress={() => this.props.navigation.navigate('DuckyScreen')} title="Ducky"/>
            <Button onPress={() => this.props.navigation.navigate('JournalScreen')} title="Journal"/>
            <Button onPress={() => this.props.navigation.navigate('AnalyticsScreen')} title="Analytics"/>
          </View>
        </View>

      </LinearGradient>
    )
  }
}

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC9EB',
    paddingTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  h5_white: {
    color: '#fbfbfb', 
    fontSize: 45,
    fontWeight: 'bold'
  },
  h5_yellow: {
    color: '#f9e067',
    fontSize: 45,
    fontWeight: 'bold'
  },
  cards: {
    width: 300,
    height: 450,
    borderRadius: 20,
    margin: 10
  },
  h4_blue: {
    color: '#6B8DB2',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: '600',
  },
  dock_container: {
    width: 414, 
    height: 100, 
    backgroundColor: '#AEC9EB', 
    position: 'absolute', 
    bottom: 0,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  dock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  h4_white: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 40,
    fontWeight: 'bold',
  }
});