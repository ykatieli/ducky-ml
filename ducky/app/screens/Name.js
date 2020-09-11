// Name.js

import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, Button, Alert, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import InputScrollView from 'react-native-input-scroll-view';

import styles from '../Styles';

export class Name extends Component {

  constructor() {
    super();
    
    this.state = {
      name: '',
    };

    this.handleName = this.handleName.bind(this);
  }

  handleName = (text) => {
    this.setState({ name: text });
  }

  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>
        <SafeAreaView>

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

        <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.onboard_card} >
            <View style={{alignItems: 'center', paddingTop:10}} onPress={() => this.props.navigation.navigate('HomeScreen')}>
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