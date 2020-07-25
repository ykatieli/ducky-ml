import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { Icon, InlineIcon } from '@iconify/react';
// import personCircle from '@iconify/icons-bi/person-circle';


export class Home extends Component {
  render() {
    return (
      <LinearGradient colors={['#AEC9EB', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* <Icon icon={personCircle} style={{color: '#fff'}} /> */}

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
            <View style={{alignItems: 'center', paddingTop: 30}}>
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
            <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
            <Button onPress={() => this.props.navigation.navigate('HabitTrackerScreen')} title="Habit Tracker"/>
            <Button onPress={() => this.props.navigation.navigate('DuckyScreen')} title="Ducky"/>
            <Button onPress={() => this.props.navigation.navigate('JournalScreen')} title="Journal"/>
            <Button onPress={() => this.props.navigation.navigate('AnalyticsScreen')} title="Analytics"/>
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
    margin: 10
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