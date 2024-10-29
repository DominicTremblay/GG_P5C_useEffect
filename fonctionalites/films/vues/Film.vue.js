import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import { collectionFilms } from '../../../data/films'

const FilmVue = () => {
  const [films, setFilms] = useState(collectionFilms)
  const [loading, setLoading] = useState(false)

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Image source={{ uri: item.image_url }} style={styles.image} />
            </View>
            <View>
              <Text style={styles.titre}>{item.titre}</Text>
              <Text>{item.description}</Text>
              <Text>{item.genre}</Text>
              <Text>{item.annee_sortie}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default FilmVue
