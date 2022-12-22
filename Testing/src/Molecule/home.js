import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, useState } from 'react'
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,useColorScheme,View,Section, Pressable} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import {useDispatch} from "react-redux";
import {setlogin, set_profile_name, set_inventory} from "../Redux/login"

export default function Home({navigation}) {

  // Initializing useDispatch
  const dispatch = useDispatch()
  
  const [loginid, setloginid ] = useState("");
  const navigateProfile = () => {
    navigation.navigate("Profile")
  }

  // Take note that this Sign In Button will be considered Static. There will be no API call to the backend service
  const [id, setid] = useState("")
  const [profile_name, setprofilename] = useState("")
  const [inventory, setinv] = useState("")

  const onSignUp = () => {
    dispatch(set_profile_name(profile_name))
    dispatch(setlogin(id))
    dispatch(set_inventory(inventory))
  }


  return (
    <SafeAreaView>
    <View>
      <Text variant="displaySmall">
        Sign Up
      </Text>
      <TextInput label="Login ID" onChangeText={newid => setid(newid)}/>
      <TextInput label="Name" onChangeText={newname => setprofilename(newname)} />
      <TextInput label="Inventory" onChangeText={newinventory => setinv(newinventory)} />
      {/* <Text>{id}</Text> */}
      <Button mode="contained" onPress={onSignUp}>Sign in</Button>

      <Button mode="contained" onPress={navigateProfile} >Protected</Button>
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
