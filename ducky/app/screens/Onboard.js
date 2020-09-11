// Onboard.js

import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';

export class Onboard extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Introduction */}
        <View style={{alignItems: 'center', paddingTop: 150}}>
        <Image style={[styles.ducky_logo, {width: 200, height: 200}]} source = {require('../../assets/logo.png')}></Image>
        <Text style={[styles.white_40, {paddingTop: 30}]}>Welcome to Ducky!</Text>
        {/* Onboard */}
        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.onboard_card} >
            <View style={{alignItems: 'center', paddingTop:10}} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={[styles.blue_settings, {alignContent: 'center', justifyContent: 'center'}]} onPress={() => this.props.navigation.navigate('HomeScreen')}>Let's get started</Text>
            </View>
          </LinearGradient>
        </View>

      </LinearGradient>
    )
  }
}

export default Onboard;