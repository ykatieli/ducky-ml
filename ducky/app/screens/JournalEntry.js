// JournalEntry.js

import React, { Component, useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';
import Dock from '../components/Dock';
import KeyboardShift from '../components/KeyboardShift';
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

  constructor() {
    super();

    this.state = {
      date: '',
      time: '',
      entryTitle: '',
      entry: '',
      tags: '',
      mood: '',
      height: 0,
    } 

    this.handleEntryTitle = this.handleEntryTitle.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.setMoodHappy = this.setMoodHappy.bind(this);
    this.setMoodNeutral = this.setMoodNeutral.bind(this);
    this.setMoodSad = this.setMoodSad.bind(this);
    this.createEntry = this.createEntry.bind(this);
  }

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
    
    min = (min<10?'0':'') + min;

    if (hours <= 12 || hours === 24) {
      if (hours === 24) hours = 12;
      this.setState({ time: hours + ':' + min + ' am' });
    }
    else {
      hours = (hours == 12) ? hours : hours - 12;
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

    min = (min<10?'0':'') + min;

    if (hours < 12 || hours === 24) {
      if (hours === 24) hours = 12;
      this.setState({ time: hours + ':' + min + ' am' });
    }
    else {
      hours = (hours == 12) ? hours : hours - 12;
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

  setMoodHappy = () => {
    this.setState({mood: 'happy'})
  }
  setMoodNeutral = () => {
    this.setState({mood: 'neutral'})
  }
  setMoodSad = () => {
    this.setState({mood: 'sad'})
  }

  createEntry = (event) => {
    Alert.alert(`Created "${this.state.entryTitle}"`, `on ${this.state.date} at ${this.state.time}`, "Hello")
    this.props.navigation.navigate('JournalScreen')
  }

  render() {
    return (

      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss() }>
        <LinearGradient colors={['#6B8DB2', '#7998B9']} style={styles.container}>
          
          {/* Back Button */}
          <View style={styles.top_left}>
            <Ionicons name="ios-arrow-back" size={25} color="#ffffff" onPress={ () => this.props.navigation.goBack() }/>
          </View>

          {/* Entry Information */}
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
              <Text style={styles.white_15}>{this.state.date}</Text>
              <Text style={styles.white_15}>{this.state.time}</Text>
            </View>
              <View>
                <TextInput style = {styles.white_25}
                  underlineColorAndroid = "transparent"
                  placeholder = "placeholder title"
                  placeholderTextColor = "#fbfbfb"
                  autoCapitalize = "none"
                  onChangeText = {this.handleEntryTitle}
                />
              </View>
          </View>

          {/* Tools */}
          {/* <View style={{display: 'flex', flexDirection: 'row', paddingLeft: 30, paddingRight: 30, paddingTop: 20}}> 
            <MaterialIcons name="format-align-left" size={25} color="#fbfbfb" style={{marginRight: 15}} />
            <MaterialIcons name="format-align-center" size={25} color="#fbfbfb" style={{marginRight: 15}} />
            <MaterialIcons name="format-align-right" size={25} color="#fbfbfb" style={{marginRight: 15}} />
            <MaterialIcons name="format-bold" size={25} color="#fbfbfb" style={{marginRight: 15}} />
            <MaterialIcons name="format-italic" size={25} color="#fbfbfb" style={{marginRight: 15}} />
            <MaterialIcons name="format-underlined" size={25} color="#fbfbfb" style={{marginRight: 15}} />
          </View> */}

          {/* Text Space */}
          <View style={styles.corner_card} >
            <View style={{padding: 30}}>
              <InputScrollView>
              <TextInput 
                style = {[styles.blue_18, { height: Math.min(490, Math.max(500, this.state.height))}]}
                placeholder = "Begin entry here..."
                placeholderTextColor = "#718399"
                autoCapitalize = "none"
                multiline={true}
                onContentSizeChange={(event) => 
                  this.setState({ height:event.nativeEvent.contentSize.height})
                }
                onChangeText = {this.handleEntry}
              />   
              </InputScrollView>
            </View>
          </View>

          {/* Bottom Bar */}
          <View>
            <KeyboardShift>
              { () => (
                <View style={styles.bottom_bar}>
                  {/* Tags */}
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.blue_20}>Tags:</Text>
                      <View style={{marginLeft: 10}}>
                        <TextInput style = {styles.blue_15}
                          placeholder = "#"
                          placeholderTextColor = "#718399"
                          autoCapitalize = "none"
                          onChangeText = {this.handleTags}
                        />
                      </View>
                  </View>
                  {/* Mood and Create Entry */}
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
                    <Text style={styles.blue_20}>Mood:</Text>
                    <View style={{ flexDirection: 'row', width: 150, justifyContent: 'space-evenly' }}>
                      <MaterialIcons name="sentiment-satisfied" size={25} color="#f9e067" onPress={this.setMoodHappy}/>
                      <MaterialIcons name="sentiment-neutral" size={25} color="#f9e067" onPress={this.setMoodNeutral} />
                      <MaterialIcons name="sentiment-dissatisfied" size={25} color="#f9e067" onPress={this.setMoodSad}/>
                    </View>
                    {/* Create Entry Button */}
                    <View style={styles.button_entry}>
                      <Button title="Create Entry"  onPress={this.createEntry} color="#FBFBFB"/>
                      {/* Change this so that when we press this button, we update all states, then call the database update */}
                    </View>
                  </View> 
                </View>
              )}
            </KeyboardShift>
          </View>          

          {/* Dock */}
          <Dock navigation={this.props.navigation}/>

        </LinearGradient>
      </TouchableWithoutFeedback>
    )
  }
}

export default JournalEntry;