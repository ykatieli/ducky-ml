// Home.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';
import Account from '../components/Account';

export class Home extends Component {
  render() {
    return (
      <LinearGradient colors={['#AEC9EB', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Account */}
        <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.top_right} onPress={() => this.props.navigation.navigate('ProfileScreen')}/>

        {/* Good morning, Haley! */}
        <View style={{paddingLeft: 30}}>
          <Text style={styles.white_45}>Good</Text>
          <Text style={styles.white_45}>morning,</Text>
          <Text>
            <Text style={styles.yellow_45}>Haley</Text>
            <Text style={styles.white_45}>!</Text>
          </Text>
        </View>

        {/* Cards */}
        <View style={{paddingTop: 30, flexDirection: 'row', justifyContent: 'center'}}>

          {/* Daily Check In */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30, }}>
              <Text style={styles.blue_25}>Daily Check In</Text>
            </View>
          </LinearGradient>
          
          {/* Daily Habits */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Daily Habits</Text>
            </View>
          </LinearGradient>

          {/* Memories */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Memories</Text>
            </View>
          </LinearGradient>
            
        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
        
      </LinearGradient> 
    )
  }
}

export default Home;