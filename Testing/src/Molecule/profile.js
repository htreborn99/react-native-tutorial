import {React, useState} from 'react'
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,useColorScheme,View,Section, Pressable, Alert} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';



export default function Profile() {
  const [pokemon, setpokemon] = useState("")
  
  // Upon clicking on the Search Button. 
  // const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
  const searchPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <View>
        <TextInput label={"Search your pokemon here."} onChange={change=>setpokemon(change)}></TextInput>
        <Button onPress={searchPokemon}>Search</Button>
    </View>
  )
}
