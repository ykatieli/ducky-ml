// App.js

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import "typeface-muli";

import Onboard from './screens/Onboard';
import Name from './screens/Name';
import Home from './screens/Home';
import Journal from './screens/Journal';
import JournalEntry from './screens/JournalEntry';
import HabitTracker from './screens/HabitTracker';
import Analytics from './screens/Analytics';
import Ducky from './screens/Ducky';
import Profile from './screens/Profile';
import AccountInfo from './screens/AccountInfo';
import Data from './screens/Data';
import Notifications from './screens/Notifications';
import Privacy from './screens/Privacy';
import Tracker from './screens/Tracker';
import Dock from './components/Dock';
import Account from './components/Account';

// for Muli font: expo install @expo-google-fonts/muli expo-font
import { AppLoading } from 'expo';
import { useFonts, Muli_400Regular} from '@expo-google-fonts/muli';

const Stack = createStackNavigator();

// export default class App extends Component {
  // render() {
function App() {

  let [fontsLoaded] = useFonts({
    Muli_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="OnboardScreen"
          component={Onboard}
        />
        <Stack.Screen
          name="NameScreen"
          component={Name}
        />
        <Stack.Screen
          name="HomeScreen"
          component={Home}
        />
        <Stack.Screen
          name="JournalScreen"
          component={Journal}
        />
        <Stack.Screen
          name="JournalEntryScreen"
          component={JournalEntry}
        />
        <Stack.Screen
          name="HabitTrackerScreen"
          component={HabitTracker}
        />
        <Stack.Screen
          name="AnalyticsScreen"
          component={Analytics}
        />
        <Stack.Screen
          name="DuckyScreen"
          component={Ducky}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={Profile}
        />
        <Stack.Screen
          name="AccountInfoScreen"
          component={AccountInfo}
        />
        <Stack.Screen
          name="DataScreen"
          component={Data}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={Notifications}
        />
        <Stack.Screen
          name="PrivacyScreen"
          component={Privacy}
        />
        <Stack.Screen
          name="TrackerScreen"
          component={Tracker}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;