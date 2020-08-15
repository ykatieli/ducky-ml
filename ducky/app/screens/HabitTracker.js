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
    	<LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

	      {/* Habit Tracker */}
          <View style={styles.header}>
            <Text style={styles.white_40}>Habit Tracker</Text>
          </View>

     	{/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </LinearGradient>
    )
  }
}

export default HabitTracker;
