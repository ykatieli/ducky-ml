// Name.js

import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button, Alert, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCeTrtwF_hjGoHeZZlYOYI1CpxbKuW7twg",
  authDomain: "ducky-ml.firebaseapp.com",
  databaseURL: "https://ducky-ml.firebaseio.com",
  projectId: "ducky-ml",
  storageBucket: "ducky-ml.appspot.com",
  messagingSenderId: "1096270328273"
};

var originalName;

if (!firebase.apps.length){
  firebase.initializeApp(config);
}

var database = firebase.database();

database.ref('/users/haylee/acctInfo/recent/Name').once('value', function(snapshot){
  originalName = snapshot.val()
});

export class Name extends Component {

  constructor() {
    super();
    
    this.state = {
      name: originalName,
    };

    this.handleName = this.handleName.bind(this);

    database.ref('/users/haylee/acctInfo/recent/Name').once('value', function(snapshot){
      originalName = snapshot.val()
    });

  }

  handleName = (text) => {
    this.setState({ name: text });
    database.ref('users/haylee/acctInfo/recent/').update({
          Name: this.state.name
      });
  }

  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>
        <SafeAreaView>

        <View style={styles.name_curve}></View> 

        {/* Question */}
        <View style={{alignItems: 'center', paddingTop: 150}}>
        <Text style={[styles.white_40, {paddingBottom: 30}]}>What is your preferred name?</Text>
        {/* Name */}
        <View style={{width: 300, height: 50, backgroundColor: '#FBFBFB', borderRadius: 20, paddingTop: 10, paddingBottom: 10, paddingLeft:15}}>        
          <TextInput style = {styles.blue_25}
            underlineColorAndroid = "transparent"
            placeholder = "Name"
            placeholderTextColor = "#6B8DB2"
            autoCapitalize = "none"
            onChangeText = {this.handleName}
          />
        </View>
        
        <View style={{paddingBottom: 230}}></View>

        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={{width: 300, height: 50, borderRadius: 20}} >
          <View style={{alignItems: 'center', justifyContent: 'center', paddingTop:10}} onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text style={styles.blue_settings} onPress={() => this.props.navigation.navigate('HomeScreen')}>Continue</Text>
          </View>
        </LinearGradient>
        </View>

        </SafeAreaView>

      </LinearGradient>
    )
  }
}

export default Name;