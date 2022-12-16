/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Imported Libraries 
import React from 'react';
import {store} from '../src/Redux/store';
import { Provider } from 'react-redux';
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Section} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import External Molecules
import Home from "./Molecule/home"
import Profile from "./Molecule/profile"


const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Screen_A" component={Home}></Stack.Screen>
          <Stack.Screen name="Screen_B" component={Profile}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;



