// Styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC9EB',
    paddingTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profile_icon: {
    position: 'absolute', 
    right: 0, 
    paddingTop: 50, 
    paddingRight: 30,
    shadowColor: '#718399',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },
  shadow_icon: {
    shadowColor: '#718399',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  h5_white: {
    color: '#fbfbfb', 
    fontSize: 45,
    fontWeight: 'bold'
  },
  h5_yellow: {
    color: '#f9e067',
    fontSize: 45,
    fontWeight: 'bold'
  },
  cards: {
    width: 300,
    height: 450,
    borderRadius: 20,
    margin: 10,
  },
  h3_blue: {
    color: '#6B8DB2',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: '600',
  },
  dock_container: {
    width: 414, 
    height: 100, 
    backgroundColor: '#AEC9EB', 
    position: 'absolute', 
    bottom: 0,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  dock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  h4_white: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default styles;