import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native'

import ListeFilms from '../composants/Liste.films.composant'

const FilmVue = ({films, loading}) => {


  if (loading) {
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

export default FilmVue
