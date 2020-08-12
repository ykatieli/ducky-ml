// App.js

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import "typeface-muli";

import Onboard from './screens/Onboard';
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

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
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
}

// export const Dock = 

// // Onboarding1 Screen
// function Onboarding1Screen({ navigation }) {
//   return (
//     <View style={styles_Onboarding1.container} >
//       <Text>Welcome to Ducky!</Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// // HomeScreen
// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container} >
//       <Text>Home Screen</Text>
//       <StatusBar style="auto" />
//       <Button
//         title="Go to Journal"
//         onPress={() => navigation.navigate('Journal')}
//       />
//     </View>
//   )
// }

// // JournalScreen
// function JournalScreen() {
//   return (
//     <View style={styles.container} >
//       <Text>Journal Screen</Text>
//       <StatusBar style="auto" />
//       <Button
//         title="Go back"
//         onPress={() => navigation.goBack()}
//       />
//     </View>
//   )
// }

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Onboarding1">
//         <Stack.Screen
//           name="Onboarding1"
//           component={Onboarding1Screen}
//         />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Overview' }}
//         />
//         <Stack.Screen
//           name="Journal"
//           component={JournalScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#AEC9EB',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const styles_Onboarding1 = StyleSheet.create({
//   container: {
//     position: 'relative',
//     width: 414,
//     height: 896,

//     backgroundColor: '#FFFFFF',
//     // border-radius: '20px',
//   },
// });
