import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

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
var id;

if (!firebase.apps.length){
  firebase.initializeApp(config);
}

var database = firebase.database();

database.ref('/users/haylee/acctInfo/recent/ID').once('value', function(snapshot){
  //console.log(snapshot.val());
  id = snapshot.val()
});

database.ref('/users/haylee/acctInfo/recent/Name').once('value', function(snapshot){
  console.log(snapshot.val());
  name = snapshot.val()
});

export class AccountInfo extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Back Button */}
        <View style={styles.top_left}>
            <Ionicons name="ios-arrow-back" size={25} color="#ffffff" onPress={ () => this.props.navigation.goBack() }/>
        </View>

        {/* Introduction */}
        <View style={{alignItems: 'center', paddingTop: 0}}>
        <Text style={styles.white_40}>Account</Text>
        </View>

        {/* Account Info */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.account_card} >
            <View style={{alignItems: 'left', paddingTop: 30, paddingLeft: 20}}>
              <Text style={styles.blue_settings}>Name: {name}</Text>
              {/* <Text style={styles.blue_settings}>Email: </Text> */}
              <Text style={styles.blue_settings}>User ID: {id}</Text>
              {/* <Text style={styles.blue_settings}>Birthdate: </Text> */}
              {/* <Text style={styles.blue_settings}>Gender: </Text> */}
              <Text></Text>
              <Text style={styles.blue_settings}>Manage Account</Text>
              <Text style={styles.blue_settings}>Change Password</Text>
              <Text style={styles.blue_settings}>Log Out</Text>
            </View>
          </LinearGradient>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </LinearGradient>
    )
  }
}

export default AccountInfo;