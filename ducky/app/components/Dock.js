// Dock.js

import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';


export class Dock extends Component {
  render() {
    return ( 
      <View style={styles.dock_container}>
        <View style={styles.dock}>
          <Feather name="home" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('HomeScreen')} />
          <MaterialCommunityIcons name="calendar-check-outline" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('HabitTrackerScreen')} />
          {/* <MaterialCommunityIcons name="duck" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('DuckyScreen')} /> */}
          <Image style={styles.dock_icon} source={require('../../assets/logo.png')}></Image>
          <FontAwesome name="pencil-square-o" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('JournalScreen')} />
          <AntDesign name="areachart" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('AnalyticsScreen')} />
        </View>
      </View>
    )
  }
}

export default Dock;