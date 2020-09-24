// Journal.js

import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
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

        <ScrollView>
        <View style={styles.header}>
          <Text style={styles.white_40}>Journal</Text>
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
        {/* <View style={{paddingTop: 20, paddingLeft: 20, display: 'flex', flexDirection: 'row',}}> */}
          {/* Journal #1: current journal */}
          {/* <LinearGradient colors={['#FFF3C1', '#F9E076']} style={styles.journal_cards}>
            <View>
              <Text style={styles.white_25}>Journal #1</Text>
            </View>
          </LinearGradient> */}

          {/* Journal #2 */}
          {/* <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.journal_cards}>
            <View>
              <Text style={styles.blue_25}>Journal #2</Text>
            </View>
          </LinearGradient> */}

          {/* Add new journal */}
          {/* <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.journal_cards}>
            <View>
              <Ionicons name="ios-add-circle" size={50} color="#6B8DB2" />
            </View>
          </LinearGradient>
        </View> */}

        {/* Entries */}
        <View style={{paddingTop: 30, paddingLeft: 30}}>

          {/* Entry #1 */}
          <View style={styles.journal_entry}>
            {/* Mood */}
            {/* <View style={{width: 30, height: 30, borderRadius: 100, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>
              <MaterialIcons name="sentiment-satisfied" size={25} color="#f9e067" />
            </View> */}

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>8:39 pm</Text>
              <Text style={styles.white_15}>Sept 22</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}} onPress={() => this.props.navigation.navigate('JournalEntryExampleScreen')}>
              <Text style={{fontSize: 20, color: '#ffffff'}} onPress={() => this.props.navigation.navigate('JournalEntryExampleScreen')}>i'm stressed i want a job</Text>
            </View>
          </View>

          {/* Entry #2 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>11:21 pm</Text>
              <Text style={styles.white_15}>Sept 21</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>a genuinely good day :)</Text>
            </View>
          </View>

          {/* Entry #3 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>8:30 am</Text>
              <Text style={styles.white_15}>Sept 20</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>goal: be healthier</Text>
            </View>
          </View>

          {/* Entry #4 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>9:00 am</Text>
              <Text style={styles.white_15}>Sept 19</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>new day, new me!</Text>
            </View>
          </View>

          {/* Entry #5 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>9:00 pm</Text>
              <Text style={styles.white_15}>Sept 18</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>i'm lonely</Text>
            </View>
          </View>

          {/* Entry #6 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>6:20 pm</Text>
              <Text style={styles.white_15}>Sept 17</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>i love my friends</Text>
            </View>
          </View>

          {/* Entry #7 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>1:39 am</Text>
              <Text style={styles.white_15}>Sept 16</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>what is life? who am i?</Text>
            </View>
          </View>

          {/* Entry #8 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>10:00 am</Text>
              <Text style={styles.white_15}>Sept 15</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>today is a busy day!</Text>
            </View>
          </View>

          {/* Entry #9 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>3:45 pm</Text>
              <Text style={styles.white_15}>Sept 14</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>school stress :(</Text>
            </View>
          </View>

          {/* Entry #10 */}
          <View style={styles.journal_entry}>

            {/* Time and Date */}
            <View style={{paddingLeft: 10}}>
              <Text style={styles.white_12}>8:00 am</Text>
              <Text style={styles.white_15}>Sept 13</Text>
            </View>

            {/* Journal Entry Title */}
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>last night's dream...</Text>
            </View>
          </View>

        </View>
        </ScrollView>

        <View style={{paddingBottom: 100}}></View>
        
        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </LinearGradient>

    )
  }
}

export default Journal;