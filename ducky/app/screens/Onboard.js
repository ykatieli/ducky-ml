// Onboard.js

import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';

export class Onboard extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Introduction */}
        <View style={{alignItems: 'center', paddingTop: 150}}>
        <Image style={styles.ducky_logo} source = {require('../../assets/logo.png')}></Image>
        <Text style={styles.white_40}>Welcome to Ducky!</Text>
        {/* Onboard */}
        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.onboard_card} >
            <View style={{alignItems: 'center', paddingTop:10}} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('HomeScreen')}>Let's get started</Text>
              {/* <Button title="Let's get started"  onPress={() => this.props.navigation.navigate('HomeScreen')} color="#6B8DB2" style={styles.blue_settings}/> */}
            </View>
          </LinearGradient>
        </View>

      </LinearGradient>
    )
  }
}

export default Onboard;