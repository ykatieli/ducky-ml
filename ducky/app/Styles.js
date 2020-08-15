// Styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Text
  yellow_75: {
    color: '#f9e067',
    fontSize: 75,
    fontWeight: 'bold'
  },
  white_45: {
    color: '#fbfbfb', 
    fontSize: 45,
    fontWeight: 'bold'
  },
  yellow_45: {
    color: '#f9e067',
    fontSize: 45,
    fontWeight: 'bold'
  },
  white_40: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 40,
    fontWeight: 'bold',
  },
  blue_settings: {
    color: '#6B8DB2',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: '300',
  },
  white_25: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: '600',
  },
  white_30: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 'bold'
  },
  blue_25: {
    color: '#6B8DB2',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: '600',
  },
  white_20: {
    color: '#fbfbfb',
    fontStyle: 'normal',
    fontSize: 20,
  },
  blue_20: {
    color: '#6B8DB2',
    fontStyle: 'normal',
    fontSize: 20,
  },
  blue_18: {
    color: '#718399',
    fontSize: 18,
  },
  white_15: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 15,
  },
  blue_15: {
    color: '#718399',
    fontSize: 15,
  },
  white_12: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 12,
  },

  // General
  container: {
    flex: 1,
    // backgroundColor: '#000',//'#AEC9EB',
    paddingTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  top_right: {
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
  top_left: {
    position: 'absolute', 
    left: 0, 
    paddingTop: 50, 
    paddingLeft: 30,
    shadowColor: '#718399',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2
    },
  },
  header: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  // Components
  //// Onboard
  onboard_card: {
    width: 300,
    height: 50,
    left: 57,
    top: 500,
    borderRadius: 20,
    margin: 10,
    position: 'absolute', 
  },
  ducky_logo: {
    width: 150,
    height: 150,
  },
  //// Home
  cards: {
    width: 300,
    height: 450,
    borderRadius: 20,
    margin: 10,
  },
  //// Settings
  settings_card: {
    width: 364,
    height: 230,
    borderRadius: 20,
    paddingTop: 0,
    paddingLeft: 0,
    margin: 25,
  },
  account_card: {
    width: 364,
    height: 400,
    borderRadius: 20,
    paddingTop: 0,
    paddingLeft: 0,
    margin: 25,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  //// Dock
  dock_container: {
    width: 414, 
    height: 100, 
    backgroundColor: '#AEC9EB', 
    position: 'absolute', 
    bottom: 0,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  dock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dock_icon: {
    width: 50,
    height: 50,
  },
  journal_cards: {
    width: 140,
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  searchbar: {
    width: 300,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#fbfbfb',
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  journal_entry: {
    width: 354,
    height: 66,
    borderRadius: 20,
    backgroundColor: 'rgba(107, 141, 178, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  corner_card: {
    backgroundColor: '#fbfbfb',
    borderTopLeftRadius: 60,
    marginTop: 30,
    width: 414,
    height: 620,
  },
  bottom_bar: {
    backgroundColor: '#fbfbfb',
    borderTopWidth: 1,
    borderTopColor: 'rgba(196, 196, 196, 0.25)',
    width: 432,
    height: 90,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
  },
  button_entry: {
    width: 140,
    height: 35,
    backgroundColor: '#6b8db2',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Analytics
  analytics_card: {
    width: 354,
    backgroundColor: '#fbfbfb',
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  analytics_halfcard: {
    width: 167,
    backgroundColor: '#fbfbfb',
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    marginBottom: 15,
    marginLeft: 7.5,
    marginRight: 7.5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  // Ducky
  chatbox: {
    borderRadius: 20,
    maxWidth: 225,
    padding: 10,
    marginBottom: 10,
  },
});

export default styles;