// App.js

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
// import { StackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Journal from './screens/Journal';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
         <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{ headerShown: false}}>
          {/* <Stack.Screen
            name="Onboarding1"
            component={Onboarding1Screen}
          /> */}
          <Stack.Screen
            name="HomeScreen"
            component={Home}
          />
          <Stack.Screen
            name="JournalScreen"
            component={Journal}
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
