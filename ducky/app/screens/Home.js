// Home.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';
import Account from '../components/Account';

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCeTrtwF_hjGoHeZZlYOYI1CpxbKuW7twg",
  authDomain: "ducky-ml.firebaseapp.com",
  databaseURL: "https://ducky-ml.firebaseio.com",
  projectId: "ducky-ml",
  storageBucket: "ducky-ml.appspot.com",
  messagingSenderId: "1096270328273"
};

var name;

if (!firebase.apps.length){
  firebase.initializeApp(config);

}

var database = firebase.database();

database.ref('/users/haylee/acctInfo/recent/Name').once('value', function(snapshot){
  name = snapshot.val()
});


export class Home extends Component {
  render() {
    database.ref('/users/haylee/acctInfo/recent/Name').once('value', function(snapshot){
      name = snapshot.val()
    });

    return (
      <LinearGradient colors={['#AEC9EB', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Account */}
        <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.top_right} onPress={() => this.props.navigation.navigate('ProfileScreen')}/>

        {/* Good morning, Haley! */}
        <View style={{paddingLeft: 30}}>
          <Text style={styles.white_45}>Good</Text>
          <Text style={styles.white_45}>morning,</Text>
          <Text>
            <Text style={styles.yellow_45}>{name}</Text>
            <Text style={styles.white_45}>!</Text>
          </Text>
        </View>

        {/* Cards */}
        <View style={{paddingTop: 30, flexDirection: 'row', justifyContent: 'center'}}>

          {/* Daily Check In */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30, }}>
              <Text style={styles.blue_25}>Daily Check In</Text>
            </View>
          </LinearGradient>
          
          {/* Daily Habits */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Daily Habits</Text>
              <View style={{paddingTop: 30,}}>
                <Text style={styles.blue_20}>
                  <Ionicons name="ios-checkbox-outline" size={25} color="#718399" />
                  <Text>   Make my bed</Text>
                </Text>
                <Text style={styles.blue_20}>
                  <Ionicons name="ios-checkbox-outline" size={25} color="#718399" />
                  <Text>   Drink water</Text>
                </Text>
                <Text style={styles.blue_20}>
                  <Ionicons name="ios-checkbox-outline" size={25} color="#718399" />
                  <Text>   Exercise</Text>
                </Text>
                <Text style={styles.blue_20}>
                  <Ionicons name="ios-checkbox-outline" size={25} color="#718399" />
                  <Text>   Study</Text>
                </Text>
              </View>
            </View>
          </LinearGradient>

          {/* Memories */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.cards} >
            <View style={{alignItems: 'center', paddingTop: 30}}>
              <Text style={styles.blue_25}>Memories</Text>
            </View>
          </LinearGradient>
            
        </View>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>
        
      </LinearGradient> 
    )
  }
}

export default Home;