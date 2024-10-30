import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Exemple1 = (props) => {
  const [msg, setMsg] = useState('Salut ! Mario.')
  const [errMsg, setErrMsg] = useState('')
  const [text, setText] = useState('Bowser arrive !')

  const afficherMsg = (message) => console.log({ message })

  useEffect(() => {
    console.log('-'.repeat(20))
    console.log('Exécution du useEffect')

    console.log(
      'Sans dépendance spécifique, useEffect est déclenché après chaque rendu'
    )
    afficherMsg(msg)
    afficherMsg(errMsg)
    afficherMsg(text)
    console.log('-'.repeat(20))
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hook useEffect</Text>
      <Text style={styles.subtitle}>
        Le useEffect s'exécute après le rendu du composant
      </Text>

      <Text style={styles.label}>Message :</Text>
      <Text style={styles.msg}>{msg}</Text>
      <Button
        title="Changer le message"
        onPress={() => setMsg('Salut Luigi')}
      />

      <Text style={styles.error}>{errMsg || 'Tout va bien !'}</Text>
      <Button
        title="Changer le message d'erreur"
        onPress={() => setErrMsg('Oh non ! Mario est KO')}
      />

      <Text style={styles.text}>{text}</Text>
      <Button
        title="Changer le texte"
        onPress={() => setText('Bowser, pars !')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
  },
  msg: {
    color: 'royalblue',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
  text: {
    color: 'purple',
    marginVertical: 10,
  },
})

export default Exemple1
