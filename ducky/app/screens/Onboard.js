// Onboard.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';

export class Onboard extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Introduction */}
        <View style={{alignItems: 'center', paddingTop: 300}}>
        <Text style={styles.white_40}>Welcome to Ducky!</Text>
        </View>

        {/* Account */}
        <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.top_right} onPress={() => this.props.navigation.navigate('HomeScreen')}/>

        {/* Onboard */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.onboard_card} >
            <View style={{alignItems: 'center', paddingTop:10}}>
              <Text style={styles.blue_settings}>Let's get started</Text>
            </View>
          </LinearGradient>

      </LinearGradient>
    )
  }
}

export default Onboard;