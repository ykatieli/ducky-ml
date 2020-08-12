import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';

export class Tracker extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Back Button */}
        {/* <View style={styles.top_left}>
          <Ionicons name="ios-arrow-back" size={25} color="#ffffff" />
        </View> */}

        {/* Profile icon */}
        <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.top_right} onPress={() => this.props.navigation.navigate('ProfileScreen')}/>

        {/* Introduction */}
        <View style={{alignItems: 'center', paddingTop: 0}}>
        <Text style={styles.white_40}>Tracker Settings</Text>
        </View>

        {/* Account Info */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.account_card} >
            <View style={{alignItems: 'left', paddingTop: 30, paddingLeft: 20}}>
              <Text style={styles.blue_settings}>Current streak</Text>
              <Text style={styles.blue_settings}>Longest streak</Text>
              <Text style={styles.blue_settings}>Start date</Text>
            </View>
          </LinearGradient>

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

export default Tracker;