import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import FilmVue from './fonctionalites/films/vues/Film.vue'
import UseFilms from './hooks/useFilms'

import Exemple from './fonctionalites/exemple/Exemple'
import Exemple1 from './fonctionalites/exemple/Exemple1'

export default function App() {


  const { films, loading } = UseFilms()

  return (
    <SafeAreaView style={styles.container}>
      <FilmVue films={films} loading={loading} />
      {/* <Exemple1 /> */}
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
