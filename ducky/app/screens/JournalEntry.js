// JournalEntry.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class JournalEntry extends Component {
  render() {
    return (
      <LinearGradient colors={['#6B8DB2', '#7998B9']} style={styles.container}>
        
        {/* Back Button */}
        <View style={styles.top_left}>
          <Ionicons name="ios-arrow-back" size={25} color="#ffffff" />
        </View>

        {/* Entry Information */}
        <View style={{paddingLeft: 30, paddingRight: 30}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
            <Text style={styles.white_15}>Date</Text>
            <Text style={styles.white_15}>Time</Text>
          </View>
          <View>
            <Text style={styles.white_25}>placeholder title</Text>
          </View>
        </View>

        {/* Tools */}
        <View style={{display: 'flex', flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 20}}> 
          <MaterialIcons name="format-align-left" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-align-center" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-align-right" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-bold" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-italic" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-underlined" size={25} color="#fbfbfb" />
        </View>

        {/* Text Space */}
        <View style={styles.corner_card}>

          {/* Bottom Bar */}
          <View style={styles.bottom_bar}>
            {/* Tags */}
            <View>
              <Text style={styles.blue_20}>Tags:</Text>
              <Text></Text>
            </View>
            {/* Mood and Create Entry */}
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}>
              <Text style={styles.blue_20}>Mood:</Text>
              <View style={{flexDirection: 'row', width: 150, justifyContent: 'space-evenly'}}>
                <MaterialIcons name="sentiment-satisfied" size={25} color="#f9e067" />
                <MaterialIcons name="sentiment-neutral" size={25} color="#f9e067" />
                <MaterialIcons name="sentiment-dissatisfied" size={25} color="#f9e067" />
              </View>
              {/* Create Entry Button */}
              <View style={styles.button_entry}>
                <Text style={styles.white_20}>Create Entry</Text>
              </View>
            </View>
          </View>
        </View>
        
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

export default JournalEntry;