/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {store} from '../src/Redux/store';
import { Provider } from 'react-redux';


import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Section} from 'react-native';

import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar/>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;



