// JournalEntry.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';

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
        <View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30}}>
            <Text style={styles.white_15}>Date</Text>
            <Text style={styles.white_15}>Time</Text>
          </View>
          <View>
            <Text>Placeholder Title</Text>
          </View>
        </View>

        {/* Tools */}
        <View> 

        </View>

        {/* Text Space */}
        <View>

          {/* Bottom Bar */}
          <View>
            {/* Tags */}
            <View>
              <Text>Tags</Text>
              <Text>#Journal1</Text>
            </View>
            {/* Mood and Create Entry */}
            <View>
              <Text>Mood</Text>
              <View>
              
              </View>
              {/* Create Entry Button */}
              <View>

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