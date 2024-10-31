import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import VueFilm from './fonctionalites/film/vues/Vue.Film'
import axios from 'axios'

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
    <SafeAreaView style={styles.container}>
      <VueFilm films={films} loading={loading} />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
