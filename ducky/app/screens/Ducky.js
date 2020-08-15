// Ducky.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Ducky extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

          {/* Ducky */}
          <View style={styles.header}>
            <Text style={styles.white_40}>Ducky</Text>
          </View>

          {/* Chat Area */}
          <View style={{paddingTop: 30, paddingLeft: 30, paddingRight: 30, flexDirection: 'column' }}>

            <View >
              <LinearGradient colors={['#FFF3C1','#F9E076']} style={styles.chatbox}>
                <Text style={styles.blue_15}>Hello, Haley! How are you today?</Text>
              </LinearGradient>
            </View>

            <View style={{ alignItems: 'flex-end' }} >
              <LinearGradient colors={['#FFFFFF','#FBFBFB']} style={styles.chatbox}>
                <Text style={styles.blue_15}>I've been feeling kind of down.</Text>
              </LinearGradient>
            </View>

            <View>
              <LinearGradient colors={['#FFF3C1','#F9E076']} style={styles.chatbox}>
                <Text style={styles.blue_15}>I'm sorry to hear that! Would you like to talk about it?</Text>
              </LinearGradient>
            </View>

          </View>

        
        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </LinearGradient>
    )
  }
}

export default Ducky;