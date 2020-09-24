// JournalEntryExample.js

import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button, Alert, SafeAreaView, KeyboardAvoidingView, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';
import Dock from '../components/Dock';
import KeyboardShift from '../components/KeyboardShift';

export class JournalEntryExample extends Component {

  render() {

    return (
        <LinearGradient colors={['#6B8DB2', '#7998B9']} style={styles.container}>
          
          {/* Back Button */}
          <View style={styles.top_left}>
            <Ionicons name="ios-arrow-back" size={25} color="#ffffff" onPress={ () => this.props.navigation.goBack() }/>
          </View>

          {/* Entry Information */}
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
              <Text style={styles.white_15}>September 22, 2020</Text>
              <Text style={styles.white_15}>8:39 pm</Text>
            </View>
              <View>
                <Text style={styles.white_25}>i'm stressed i want a job</Text>
              </View>
          </View>

          {/* Text Space */}
          <View style={[styles.corner_card, {paddingLeft: 30, paddingRight: 30, paddingTop:30}]} >
          <ScrollView keyboardDismissMode='on-drag'>
            <View >
              <Text style={styles.blue_18}>Today has been a long day of interview prep. I am very stressed and very tired. I don't know what I want to do with my life... but I really want this job so that I do not have to be as stressed when I continue to search for other opportunities.</Text> 
              <Text style={[styles.blue_18, {paddingTop: 10}]}>I am not even sure what location I want to be in. Ideally, I would like to be somewhere close to my friends and family. I'm anxious I'll end up somewhere completely new and very alone.</Text>
              <Text style={[styles.blue_18, {paddingTop: 10}]}>I am not ready to be an adult or enter the real world. However, I am very excited to start working and no longer have to go to school!</Text>
              <Text style={[styles.blue_18, {paddingTop: 10}]}>Things will work out in the end, won't they?</Text>

            </View>
            </ScrollView>
          </View>     

          {/* Dock */}
          <Dock navigation={this.props.navigation}/>

        </LinearGradient>
    )
  }
}

export default JournalEntryExample;