/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Imported Libraries 
import React from 'react';
import store from "../Redux/store"
import {Provider} from "react-redux"
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Section} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useSelector} from "react-redux";


// Import External Molecules
import Home from "./home"
import Profile from "./profile"
import Profilesetting from './profilesetting';
import Inventory from './inventory';
// import { Drawer } from 'react-native-paper';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function IsSignedIn() {
  let id = useSelector((state) => state.login.login)
  let name = useSelector((state) => state.login.profile_name)
  let inventory = useSelector((state) => state.login.inventory)

  if (id == "" ) {
    return false
  }
  else {
    return true
  }
};

function NotAuth() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

function Auth() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="ProfileSetting" component={Profilesetting} />
      <Tab.Screen name="Inventory" component={Inventory} />
    </Tab.Navigator>
  )
}

function Routing() {

  // React Redux Goes Here for Protected Route 
  // let jobRoles_desc = useSelector((state) => state.login.jobrole_desc)
  // let jobRoles_id = useSelector((state) => state.jobrole.jobrole_id)
  // let jobRoles_name = useSelector((state) => state.jobrole.jobrole_name)
  return (
      <NavigationContainer options={{ headerShown: false }}>
        <Stack.Navigator >

          {IsSignedIn() ?
            <Stack.Screen name="Authed" component={Auth} options={{ headerShown: false }}></Stack.Screen>
            :
            <Stack.Screen name="NotAuth" component={NotAuth} options={{ headerShown: false }}></Stack.Screen>
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Routing;