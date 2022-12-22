/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Imported Libraries 
import React from 'react';
import store from "./Redux/store"
import {Provider} from "react-redux"
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Section} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useSelector} from "react-redux";


// Import External Molecules
// import Home from "./Molecule/home"
// import Profile from "./Molecule/profile"
// import Profilesetting from './Molecule/profilesetting';
// import Inventory from './Molecule/inventory';
import Routing from "./Molecule/routing"
// import { Drawer } from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}> 
      <Routing /> 
    </Provider>
  )
}
// function App () {

//   return (
//     <Provider store={store}> 
//       <Routing /> 
//     </Provider>
//   )
// }


// export default App;


