// Ducky.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Ducky extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.white_40}>This is the Ducky screen</Text>
        
        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>
    )
  }
}

export default Ducky;