import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { StyleSheet, View } from 'react-native'

export const ouvrirSession = async (courriel, motPasse) => {
  const URL_API = `http://localhost:5000/api`

  try {
    const reponse = await axios({
      url: `${URL_API}/session`,
      method: 'POST',
      data: { courriel, mot_passe: motPasse},
    })

    // les donnees sont dans la cle data
    console.log(reponse.data)

    const jeton = reponse.data

    if (jeton) {
      await AsyncStorage.setItem('jeton', jeton)
    }

    return jeton
  } catch (err) {
    throw new Error(`Erreur: ${err.message}`)
  }
}

