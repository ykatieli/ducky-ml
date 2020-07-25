import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, MaterialIcons, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';


export class Home extends Component {
  render() {
    return (
      <LinearGradient colors={['#AEC9EB', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Profile icon */}
        <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.profile_icon}/>

        {/* Good morning, Haley! */}
        <View style={{paddingLeft: 30}}>
          <Text style={styles.h5_white}>Good</Text>
          <Text style={styles.h5_white}>morning,</Text>
          <Text>
            <Text style={styles.h5_yellow}>Haley</Text>
            <Text style={styles.h5_white}>!</Text>
          </Text>
        </View>

        {/* Cards */}
        <View style={{paddingTop: 30, flexDirection: 'row', justifyContent: 'center'}}>

          {/* Daily Check In */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30, }}>
              <Text style={styles.h3_blue}>Daily Check In</Text>
            </View>
          </LinearGradient>
          
          {/* Daily Habits */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.h3_blue}>Daily Habits</Text>
            </View>
          </LinearGradient>

          {/* Memories */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.h3_blue}>Memories</Text>
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
        
      </LinearGradient>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC9EB',
    paddingTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profile_icon: {
    position: 'absolute', 
    right: 0, 
    paddingTop: 50, 
    paddingRight: 30,
    shadowColor: '#718399',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },
  shadow_icon: {
    shadowColor: '#718399',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    }
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
    margin: 10,
  },
  h3_blue: {
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