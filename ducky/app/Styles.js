// Styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  cards: {
    width: 300,
    height: 450,
    borderRadius: 20,
    margin: 10,
  },
  journal_cards: {
    width: 140,
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  blue_25: {
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
    justifyContent: 'center',
  },
  dock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  white_40: {
    color: '#FBFBFB',
    fontStyle: 'normal',
    fontSize: 40,
    fontWeight: 'bold',
  },
  searchbar: {
    width: 300,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
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
});

export default styles;