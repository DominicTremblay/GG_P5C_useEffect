import React from 'react'
import { StyleSheet, View, FlatList, Text, Image } from 'react-native'

const ListeFilms = ({ films }) => {
  return (
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
  )
}

const styles = StyleSheet.create({
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

export default ListeFilms
