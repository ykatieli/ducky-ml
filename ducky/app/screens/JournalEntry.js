// JournalEntry.js

import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

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

var expEntry = "Had a fun day today, went out with friends, enjoyed my time.";

var state = {
  date: '',
  time: '',
  entryTitle: '',
  entry: '',
  tags: '',
}

export class JournalEntry extends Component {

  componentWillMount() {
    
    var date = new Date().getDate();
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

  
    // set date state here
    this.setState({ date: fullMonth + ' ' + date + ', ' + year });

    var hours = new Date().getHours();
    var min = new Date().getMinutes();

    if (hours < 12 || hours === 24) {
      if (hours === 24) hours = 12;
      this.setState({ time: hours + ':' + min + ' am' });
    }
    else {
      hours = hours - 12;
      this.setState({ time: hours + ':' + min + ' pm' });
    }

    //set entry state here
    // CHANGE: expEntry to text put into the journal entry
    this.setState({entry: expEntry});

    // CHANGE: hardcoded now
    this.setState({entryTitle: "New Entry"});

    


    if (!firebase.apps.length){
      firebase.initializeApp(config);
    }

    // To select data from firebase every time data has changed !
    // Utilize the current database to fill in journal information
    firebase.database().ref('users/').on('value', (data) => {
        console.log(data.toJSON());
    })

    // To Await 5 seconds to insert a new user
    // CHANGE: expUser to specific user
    setTimeout(() => {
        firebase.database().ref('users/expUser/' + Date.now().toString()).set(
            {
                entryTitle: this.state.entryTitle,
                entry: this.state.entry,
                time: this.state.time,
                date: this.state.date,
                tags: this.state.tags
            }
        ).then(() => {
            console.log('INSERTED !');
        }).catch((error) => {
            console.log(error);
        });
    }, 10000);
    // change this depending on how quickly you want it processed

    // // To Update a user
    // firebase.database().ref('users/004').update({
    //     name: 'Pheng Sengvuthy'
    // });

    // // To Remove a user
    // firebase.database().ref('users/004').remove();

}

state = {
  date: '',
  time: '',
  entryTitle: '',
  entry: '',
  tags: '',
}

  componentDidMount() {

    var date = new Date().getDate();
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

    this.setState({ date: fullMonth + ' ' + date + ', ' + year });

    // Set time

    var hours = new Date().getHours();
    var min = new Date().getMinutes();

    if (hours < 12 || hours === 24) {
      if (hours === 24) hours = 12;
      this.setState({ time: hours + ':' + min + ' am' });
    }
    else {
      hours = hours - 12;
      this.setState({ time: hours + ':' + min + ' pm' });
    }
  }

  handleEntryTitle = (text) => {
    this.setState({ entryTitle: text });
  }

  handleEntry = (text) => {
    this.setState({ entry: text });
  }

  handleTags = (text) => {
    this.setState({ tags: text });
  }

  render() {
    return (
      <LinearGradient colors={['#6B8DB2', '#7998B9']} style={styles.container}>

        {/* Back Button */}
        <View style={styles.top_left}>
          <Ionicons name="ios-arrow-back" size={25} color="#ffffff" />
        </View>

        {/* Entry Information */}
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <Text style={styles.white_15}>{this.state.date}</Text>
            <Text style={styles.white_15}>{this.state.time}</Text>
          </View>
          <View>
            <TextInput style={styles.white_25}
              //  underlineColorAndroid = "transparent"
              placeholder="placeholder title"
              placeholderTextColor="#fbfbfb"
              autoCapitalize="none"
              onChangeText={this.handleEntryTitle}
            />
            {/* <Text style={styles.white_25}>placeholder title</Text> */}
          </View>
        </View>

        {/* Tools */}
        <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
          <MaterialIcons name="format-align-left" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-align-center" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-align-right" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-bold" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-italic" size={25} color="#fbfbfb" />
          <MaterialIcons name="format-underlined" size={25} color="#fbfbfb" />
        </View>

        {/* Text Space */}
        <View style={styles.corner_card}>

          <View style={{ padding: 30 }}>
            <TextInput style={styles.blue_18}
              underlineColorAndroid="transparent"
              placeholder="Begin entry here..."
              placeholderTextColor="#718399"
              autoCapitalize="none"
              multiline={true}
              onChangeText={this.handleEntry}
            />
          </View>

          {/* Bottom Bar */}
          <View style={styles.bottom_bar}>
            {/* Tags */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.blue_20}>Tags:</Text>
              <View style={{ marginLeft: 10 }}>
                <TextInput style={styles.blue_15}
                  placeholder="#"
                  placeholderTextColor="#718399"
                  autoCapitalize="none"
                  onChangeText={this.handleTags}
                />
              </View>
            </View>
            {/* Mood and Create Entry */}
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
              <Text style={styles.blue_20}>Mood:</Text>
              <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-evenly' }}>
                <MaterialIcons name="sentiment-satisfied" size={25} color="#f9e067" />
                <MaterialIcons name="sentiment-neutral" size={25} color="#f9e067" />
                <MaterialIcons name="sentiment-dissatisfied" size={25} color="#f9e067" />
              </View>
              {/* Create Entry Button */}
              <View style={styles.button_entry}>
                <Text style={styles.white_20}>Create Entry</Text>

                {/* Change this so that when we press this button, we update all states, then call the database update */}
              </View>
            </View>
          </View>
        </View>

        {/* Dock */}
        <View style={styles.dock_container}>
          <View style={styles.dock}>
            <Feather name="home" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('HomeScreen')} />
            <MaterialCommunityIcons name="calendar-check-outline" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('HabitTrackerScreen')} />
            <MaterialCommunityIcons name="duck" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('DuckyScreen')} />
            <FontAwesome name="pencil-square-o" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('JournalScreen')} />
            <AntDesign name="areachart" size={50} color="#FFFFFF" onPress={() => this.props.navigation.navigate('AnalyticsScreen')} />
          </View>
        </View>

      </LinearGradient>
    )
  }
}

export default JournalEntry;