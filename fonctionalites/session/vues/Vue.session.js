import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-web'
import FormSession from '../composants/Frm.session.composant'

const VueSession = ({navigation}) => {
  return (
    <View>
      <FormSession navigation={navigation} />
    </View>
  )
}

export default VueSession
