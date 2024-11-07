import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-web'
import { ouvrirSession } from '../../../api/authService'

const FormSession = () => {
  const [courriel, setCourriel] = useState('')
  const [motPasse, setMotPasse] = useState('')

  const gererSession = async () => {
    try {
      const jeton = await ouvrirSession(courriel, motPasse)

      // Habituellement Navigation pour rediriger a une autre page
      console.log({ jeton })
    } catch (err) {
      throw new Error(`Erreur: ${err.message}`)
    }

    // redirection a une autre page
  }

  return (
    <View>
      <TextInput
        placeholder="courriel"
        value={courriel}
        onChangeText={setCourriel}
      />
      <TextInput placeholder="Mot de passe" value={motPasse} onChangeText={setMotPasse} />

      <Button title="Ouvrir Session" onPress={gererSession} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default FormSession
