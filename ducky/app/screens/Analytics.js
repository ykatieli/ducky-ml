// Analytics.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';

export class Analytics extends Component {
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#6B8DB2', '#7998B9']}>
        <Text style={styles.white_40}>This is the analytics screen</Text>
       
        {/* Dock */}
        <View style={styles.dock_container}>
          <View style={styles.dock}>
            <Feather name="home" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('HomeScreen')} />
            <MaterialCommunityIcons name="calendar-check-outline" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('HabitTrackerScreen')} />
            <MaterialCommunityIcons name="duck" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('DuckyScreen')} />
            <FontAwesome name="pencil-square-o" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('JournalScreen')} />
            <AntDesign name="areachart" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('AnalyticsScreen')} />
          </View>
        </View>

      </LinearGradient>
    )
  }
}

export default Analytics;
