// Styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Text
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
  white_25: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 25,
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
  white_15: {
    color: '#FBFBFB',
    fontStyle: 'normal',
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
  //// Home
  cards: {
    width: 300,
    height: 450,
    borderRadius: 20,
    margin: 10,
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
  //// Journal
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
    width: 430,
    height: 575,
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
  }
});

export default styles;