// HabitTracker.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class HabitTracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white_40}>This is the habit tracker screen</Text>
        
        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>
    )
  }
}

export default HabitTracker;
