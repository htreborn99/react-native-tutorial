import {React, useState} from 'react'
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,useColorScheme,View,Section, Pressable, Alert, Image} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import { SvgUri } from 'react-native-svg';

export default function Profile() {
  const [pokemon, setpokemon] = useState("")
  const [pokemonname, setpokemonname] = useState("")
  const [pokemondetails, setpokemondetails] = useState("")
  const [pokemonimage, setpokemonimage] = useState("")
  
  // Upon clicking on the Search Button. 
  // const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
  const searchPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
    const options = {
      method: 'GET',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
      }
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // This is to obtain the Pokemon name
        // console.log(data.species.name)
        setpokemonname(data.species.name)
        // This is to obtain the Pokemon Image:
        setpokemonimage(data.sprites.other.dream_world.front_default)
        console.log(pokemonimage)
      })
      .catch(error => {
        console.log("This is the error: "+ error)
      })
  }

  return (
    <View>

        <TextInput label={"Search your pokemon here."} onChangeText={change=>setpokemon(change)}></TextInput>
        <Button onPress={searchPokemon}>Search</Button>

        {pokemonname.length > 0 &&
          <>
            <Text>{pokemonname}</Text>
            <SvgUri width="100%" height="100%" uri={pokemonimage} />
          </>
        }

    </View>
  )
}
