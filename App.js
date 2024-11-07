import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import VueFilm from './fonctionalites/film/vues/Vue.Film'
import axios from 'axios'
import VueSession from './fonctionalites/session/vues/Vue.session'

const Stack = createNativeStackNavigator()

export default function App() {
  const chargerListFilms = async () => {
    // REquete a http://localhost:5000/api/films pour la liste de films

    try {
      const resultat = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/films`,
      })

      setFilms(resultat.data)
    } catch (e) {
      console.log(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    chargerListFilms()
  }, [])

  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Session">
          <Stack.Screen name="Session" component={VueSession} />
          <Stack.Screen
            name="Films"
            children={() => <VueFilm films={films} loading={loading} />}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
