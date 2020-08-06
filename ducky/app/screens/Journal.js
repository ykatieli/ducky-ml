// Journal.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Journal extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        <View style={styles.top_right}>
          {/* Three dots replaced by "Add Journal" icon

          <Entypo name="dots-three-vertical" size={25} color="#ffffff" />

           */}
           <Ionicons name="ios-add-circle" size={35} color="#ffffff" onPress={() => this.props.navigation.navigate('JournalEntryScreen')}/>
        </View>

        <View style={styles.header}>
          <Text style={styles.white_40}>Journals</Text>
        </View>
        
        {/* Add entry and Search */}
        {/* <View style={{alignItems: 'center', paddingLeft: 30, paddingRight: 30}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{paddingRight: 10}}>
              <Ionicons name="ios-add-circle" size={35} color="#ffffff" onPress={() => this.props.navigation.navigate('JournalEntryScreen')}/>
            </View>
            <View style={styles.searchbar}>
              <View>
                <Ionicons name="ios-search" size={25} color="#718399" style={{opacity: 0.5}} />
              </View>
              <View style={{paddingLeft: 10}}>
                <Text style={{opacity: 0.5, color: '#718399', fontSize: 18,}}>Search</Text>
              </View>
            </View>
          </View>
        </View> */}

        {/* Journal Cards */}
        <View style={{paddingTop: 20, paddingLeft: 20, display: 'flex', flexDirection: 'row',}}>
          {/* Journal #1: current journal */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.journal_cards}>
            <View>
              <Text style={styles.blue_25}>Journal #1</Text>
            </View>
          </LinearGradient>

          {/* Journal #2 */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.journal_cards}>
            <View>
              <Text style={styles.blue_25}>Journal #2</Text>
            </View>
          </LinearGradient>

          {/* Add new journal */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.journal_cards}>
            <View>
              <Ionicons name="ios-add-circle" size={50} color="#6B8DB2" />
            </View>
          </LinearGradient>
        </View>

        {/* Entries */}
        <View style={{paddingTop: 30, paddingLeft: 30}}>

          {/* Entry #1 */}
          <View style={styles.journal_entry}>
            {/* Mood */}
            <View style={{width: 30, height: 30, borderRadius: 100, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>
              <MaterialIcons name="sentiment-satisfied" size={25} color="#f9e067" />
            </View>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>Time</Text>
              <Text style={styles.white_15}>Date</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>entry #1 title</Text>
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

export default Journal;