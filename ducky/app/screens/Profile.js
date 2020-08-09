// Profile.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* Profile icon */}
        <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.top_right} onPress={() => this.props.navigation.navigate('ProfileScreen')}/>

        {/* Introduction */}
        <Text style={styles.white_40}>Profile Screen</Text>

        {/* Cards */}
        <View style={{paddingTop: 30,flexDirection: 'column', justifyContent: 'center'}}>
          
          {/* Daily Habits */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Settings</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
              <Text style={styles.h4_blue}>Hello</Text>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Premium</Text>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Other</Text>
            </View>
          </LinearGradient>
            
        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </View>
    )
  }
}

export default Profile;