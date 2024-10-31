import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import ListeFilms from '../composants/List.films.composant'

const VueFilm = ({ films, loading }) => {

  if(loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    <View style={styles.container}>
      <ListeFilms films={films} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

export default VueFilm
