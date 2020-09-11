// Goals.js

import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';

export class Goals extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Question */}
        <View style={{alignItems: 'center', paddingLeft: 30, paddingTop: 150}}>
          <Text style={styles.white_45}>Hi</Text>
          <Text>
            <Text style={styles.yellow_45}>Haley</Text>
            <Text style={styles.white_45}>!</Text>
            <Text style={styles.white_45}>What are your top 3 goals?</Text>
          </Text>
        
        {/* Continue */}
        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.onboard_card}>
          <View style={{alignItems: 'center', paddingTop:10}} onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('HomeScreen')}>Go to Home</Text>
          </View>
        </LinearGradient>
        </View>

      </LinearGradient>
    )
  }
}

export default Goals;