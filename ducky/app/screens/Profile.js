// Profile.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';

export class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* Profile icon */}
        <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.top_right} onPress={() => this.props.navigation.navigate('ProfileScreen')}/>

        {/* Introduction */}
        <Text style={styles.white_40}>Profile Screen</Text>

        {/* Cards */}
        <View style={{paddingTop: 30,flexDirection: 'column', justifyContent: 'center'}}>
          
          {/* Daily Habits */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Settings</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Premium</Text>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Other</Text>
            </View>
          </LinearGradient>
            
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

      </View>
    )
  }
}

export default Profile;