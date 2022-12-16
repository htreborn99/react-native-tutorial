import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react'
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Section, Pressable} from 'react-native';

const Stack = createStackNavigator()

export default function Home() {
  const onPressHandler = () => {
    navigation.navigate("Screen_B")
  }

  return (
    <SafeAreaView>
    <View>
      <Text>
        This is Home Page. 
      </Text>
      <Pressable onPress={onPressHandler}>
        <Text>
          Go to another screen 
        </Text>
      </Pressable>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
