// Analytics.js

import React, { Component } from 'react';
import { View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Analytics extends Component {
  render() {
    return (
      // <InputScrollView>
      <SafeAreaView>
        <ScrollView>
      <LinearGradient style={styles.container} colors={['#6B8DB2', '#7998B9']}>
  
        {/* Top text */}
        <View style={{paddingLeft: 30, paddingRight: 30}}>
          <View>
            <Text style={styles.white_45}>Hi,</Text>
            <Text>
              <Text style={styles.yellow_45}>Haley</Text>
              <Text style={styles.white_45}>!</Text>
            </Text>
          </View>
          <View style={{paddingTop: 30}}>
            <Text style={styles.white_15}>Welcome to your personal analytics page.</Text>
            <Text style={styles.white_15}>Check in to see all the progress you've made and how your emotions have fluctuated over time!</Text>
          </View>
        </View>

        {/* Month and Year */}
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
          <View style={{paddingRight: 30}}>
            <Ionicons name="ios-arrow-back" size={25} color="#fbfbfb" />
          </View>
          <Text style={{fontSize: 25, color: '#ffffff', fontWeight: 'bold'}}>
            <Text style={{paddingRight: 20}}>Month </Text>
            <Text>Year</Text>
          </Text> 
          <View style={{paddingLeft: 30}}>
            <Ionicons name="ios-arrow-forward" size={25} color="#fbfbfb" /> 
          </View>
        </View>

        {/* Cards */}
        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 30, }}>
          {/* Habit Tracker */}
          <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Habit Tracker</Text>
          </View>

          {/* Emotion Map */}
          <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Emotion Map</Text>
          </View>

          {/* Top Habits */}
          <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Top Habits</Text>
          </View>

          {/* Your Best Memory */}
          <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Your Best Memory</Text>
          </View>

          {/* Stats */}
          <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30, alignContent: 'center', }}>
            <View style={styles.analytics_halfcard}>
              <Text style={styles.yellow_75}>31</Text>
              <Text style={{color: '#f9e067', fontSize: 20, fontStyle: 'italic'}}>days on Ducky</Text>
            </View>
            <View style={styles.analytics_halfcard}>
              <Text style={styles.yellow_75}>8</Text>
              <Text style={{color: '#f9e067', fontSize: 20, fontStyle: 'italic'}}>journal entries</Text>
            </View>
          </View>

          {/* Bottom Affirmation */}
          <View style={{alignContent: 'center', justifyContent: 'center', paddingTop: 30}}>
            <Text style={{color: '#fbfbfb', fontSize: 15, fontStyle: 'italic'}}>Keep going, you're doing great! :-)</Text>
          </View>

        </View>
        </LinearGradient>

        </ScrollView>
       
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 30}}>
          {/* Dock - isn't locked properly yet*/}
          <Dock navigation={this.props.navigation}/>
        </View>

      
      </SafeAreaView>
    // </InputScrollView>
    )
  }
}

export default Analytics;
