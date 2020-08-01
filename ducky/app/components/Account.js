// Account.js - not needed anymore

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import styles from '../Styles';

export class Account extends Component {
  render() {
    return (
      <View>
        {/* Account */}
        <View style={styles.account_container}>
          <View style={styles.account}>
            <MaterialCommunityIcons name="account-circle" size={50} color="#fff" style={styles.profile_icon} onPress={() => this.props.navigation.navigate('ProfileScreen')}/>
          </View>
        </View>
      </View>
    )
  }
}

export default Account;