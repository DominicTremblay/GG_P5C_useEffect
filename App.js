import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { collectionFilms } from './data/films'
import FilmVue from './fonctionalites/films/vues/Film.vue'
import axios from 'axios'

export default function App() {
  const [films, setFilms] = useState(collectionFilms)
  const [loading, setLoading] = useState(true)

  const obtenirFilms = async () => {
    try {
      const reponse = await axios({
        method: 'GET',
        url: 'http://localhost:5000/api/films',
      })
      console.log("Reponse: ", reponse.data)
      setFilms(reponse.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    obtenirFilms()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FilmVue films={films} loading={loading} />
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
