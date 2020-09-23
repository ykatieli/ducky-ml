// Analytics.js

import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';
import Dock from '../components/Dock';

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
var daysOnDucky;
var numJournalEntries;

if (!firebase.apps.length){
  firebase.initializeApp(config);

}

var database = firebase.database();

database.ref('/users/haylee/acctInfo/recent/daysOnDucky').once('value', function(snapshot){
  daysOnDucky = snapshot.val()
});

database.ref('/users/haylee/acctInfo/recent/daysOnJournal').once('value', function(snapshot){
  console.log(snapshot.val());
  numJournalEntries = snapshot.val()
});

database.ref('/users/haylee/acctInfo/recent/Name').once('value', function(snapshot){
  console.log(snapshot.val());
  name = snapshot.val()
});

export class Analytics extends Component {

  constructor() {
    super();

    this.state = {
      month: '',
      year: '',
    }
  }

  componentDidMount() {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    var fullMonth;

    switch (month) {
      case 1:
        fullMonth = 'January';
        break;
      case 2:
        fullMonth = 'February';
        break;
      case 3:
        fullMonth = 'March';
        break;
      case 4:
        fullMonth = 'April';
        break;
      case 5:
        fullMonth = 'May';
        break;
      case 6:
        fullMonth = 'June';
        break;
      case 7:
        fullMonth = 'July';
        break;
      case 8:
        fullMonth = 'August';
        break;
      case 9:
        fullMonth = 'September';
        break;
      case 10:
        fullMonth = 'October';
        break;
      case 11:
        fullMonth = 'November';
        break;
      case 12:
        fullMonth = 'December';
        break;
      default:
        fullMonth = 'Error';
    }

    this.setState({month: fullMonth});
    this.setState({year: year});
  }

  render() {

    database.ref('/users/haylee/acctInfo/recent/Name').once('value', function(snapshot){
      console.log(snapshot.val());
      name = snapshot.val()
    });


    return (
    
    <LinearGradient style={styles.container} colors={['#6B8DB2', '#7998B9']}>
      <InputScrollView>
        {/* Top text */}
        <View style={{paddingLeft: 30, paddingRight: 30}}>
          <View>
            <Text style={styles.white_45}>Hi,</Text>
            <Text>
              <Text style={styles.yellow_45}>{name}</Text>
              <Text style={styles.white_45}>!</Text>
            </Text>
          </View>
          <View style={{paddingTop: 30}}>
            <Text style={styles.white_15}>Welcome to your personal analytics page.</Text>
            <Text style={styles.white_15}>Check in to see all the progress you've made and how your emotions have fluctuated over time!</Text>
          </View>
        </View>

        {/* Month and Year */}
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
          <View style={{paddingRight: 30}}>
            <Ionicons name="ios-arrow-back" size={25} color="#fbfbfb" />
          </View>
          <Text style={{fontSize: 25, color: '#ffffff', fontWeight: 'bold'}}>
            <Text style={{paddingRight: 20}}>{this.state.month} </Text>
            <Text>{this.state.year}</Text>
          </Text> 
          <View style={{paddingLeft: 30}}>
            <Ionicons name="ios-arrow-forward" size={25} color="#fbfbfb" /> 
          </View>
        </View>

        {/* Cards */}
        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 30, }}>
          {/* Habit Tracker */}
          {/* <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Habit Tracker</Text>
          </View> */}

          {/* Emotion Map */}
          <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Emotion Map</Text>
            <Image style={{width: 350, height: 200}} source = {require('../../assets/Chart.png')}></Image>
          </View>

          {/* Top Habits */}
          {/* <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Top Habits</Text>
          </View> */}

          {/* Your Best Memory */}
          {/* <View style={styles.analytics_card}>
            <Text style={styles.blue_25}>Your Best Memory</Text>
          </View> */}

          {/* Stats */}
          <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30, alignContent: 'center', }}>
            <View style={styles.analytics_halfcard}>
              <Text style={styles.yellow_75}>{daysOnDucky}</Text>
              <Text style={{color: '#f9e067', fontSize: 20, fontStyle: 'italic'}}>days on Ducky</Text>
            </View>
            <View style={styles.analytics_halfcard}>
              <Text style={styles.yellow_75}>{numJournalEntries}</Text>
              <Text style={{color: '#f9e067', fontSize: 20, fontStyle: 'italic'}}>journal entries</Text>
            </View>
          </View>

          {/* Bottom Affirmation */}
          <View style={{alignContent: 'center', justifyContent: 'center', paddingTop: 30}}>
            <Text style={{color: '#fbfbfb', fontSize: 15, fontStyle: 'italic'}}>Keep going, you're doing great! :-)</Text>
          </View>
          
          <View style={{paddingBottom: 150}}></View>

        </View>
       
        </InputScrollView>
        
          {/* Dock - isn't locked properly yet*/}
          <Dock navigation={this.props.navigation}/>


        
      </LinearGradient>
    
    )
  }
}

export default Analytics;
