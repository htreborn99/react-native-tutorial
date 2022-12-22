import React from 'react'
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Section, Pressable} from 'react-native';
import {useSelector} from "react-redux";

export default function Profilesetting() {
  let id = useSelector((state) => state.login.login)
  let name = useSelector((state) => state.login.profile_name)
  let inventory = useSelector((state) => state.login.inventory)

  return (
    <View>
       <Text>Welcome back, {name}. Your ID is {id}. You have sth in your inventory: {inventory}</Text>
    </View>
  )
}
