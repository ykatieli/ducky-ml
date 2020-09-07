// Name.js

import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';

export class Name extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Question */}
        <View style={{alignItems: 'center', paddingTop: 150}}>
        <Text style={styles.white_40}>What is your preferred name?</Text>
        {/* Name */}
        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.onboard_card} >
            <View style={{alignItems: 'center', paddingTop:10}} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('HomeScreen')}>Continue</Text>
            </View>
          </LinearGradient>
        </View>

      </LinearGradient>
    )
  }
}

export default Name;