// Profile.js

import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
// import { SafeAreaView, ScrollView } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Profile extends Component {
  render() {
    return (
      // <SafeAreaView style={styles.container}>
      // <ScrollView style={styles.scrollView}>
      <InputScrollView>
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Introduction */}
        <View style={{alignItems: 'center', paddingTop: 0}}>
        <Text style={styles.white_40}>Profile</Text>
        </View>

        <View style={{alignItems: 'center', paddingTop: 10}}>
        <Image style={styles.profile} source = {require('../../assets/profile.png')}></Image>
        </View>

        <View style={{alignItems: 'center', paddingTop: 10}}>
        <Text style={styles.white_20}>Haley Lee</Text>
        <Text style={styles.white_12}>ID: haleylee</Text>
        </View>

      {/* Stats */}
        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
          <View style={{alignItems: 'left', paddingTop: 30, paddingLeft: 20}}>
            <Text style={styles.blue_settings}># of days on Ducky</Text>
            <Text style={styles.blue_settings}># of days habits tracked</Text>
            <Text style={styles.blue_settings}># of days journaled</Text>
            <Text style={styles.blue_settings}># of points</Text>
          </View>
        </LinearGradient>

        <View style={{alignItems: 'left', paddingTop: 20, paddingLeft: 30}}>
          <Text style={styles.white_30}>Settings</Text>
        </View>

        {/* Cards */}
        <View style={{paddingTop: 0,flexDirection: 'column', justifyContent: 'center'}}>
        
          {/* Settings  */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'left', paddingTop: 30, paddingLeft: 20}}>
              <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('AccountInfoScreen')}>Account</Text>
              <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('DataScreen')}>Data</Text>
              <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('NotificationsScreen')}>Notifications</Text>
              <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('PrivacyScreen')}>Privacy Settings</Text>
              <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('TrackerScreen')}>Tracker Settings</Text>
            </View>
          </LinearGradient>

        <View style={{alignItems: 'left', paddingTop: 20, paddingLeft: 30}}>
          <Text style={styles.white_30}>Premium</Text>
        </View>
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'left', paddingTop: 30, paddingLeft: 20}}>
              <Text style={styles.blue_settings}>Online Backup</Text>
              <Text style={styles.blue_settings}>Restore Purchases</Text>
              <Text style={styles.blue_settings}>Remove Ads</Text>
              <Text style={styles.blue_settings}>Shop</Text>
            </View>
          </LinearGradient>

        <View style={{alignItems: 'left', paddingTop: 20, paddingLeft: 30}}>
          <Text style={styles.white_30}>Other</Text>
        </View>
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
            <View style={{alignItems: 'left', paddingTop: 30, paddingLeft: 20}}>
              <Text style={styles.blue_settings}>Version</Text>
              <Text style={styles.blue_settings}>FAQ & User Support</Text>
              <Text style={styles.blue_settings}>Rate Ducky</Text>
              <Text style={styles.blue_settings}>Follow Us</Text>
            </View>
          </LinearGradient>  

        <View style={{alignItems: 'left', paddingTop: 20, paddingLeft: 30}}>
          <Text style={styles.white_30}>Disclaimer</Text>
        </View>
        <View style={{alignItems: 'left', paddingTop: 20, paddingLeft: 30}}>
          <Text style={styles.blue_15}>Ducky is not meant to be used as therapy or in place of professional medical guidance. The developer team is not, in any way, claiming to be medical experts.</Text>
        </View>

        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.settings_card} >
          <View style={{alignItems: 'left', paddingTop: 10, paddingLeft: 20}}>
          </View>
        </LinearGradient>

        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
      </LinearGradient>
    </InputScrollView>
    )
  }
}


export default Profile;