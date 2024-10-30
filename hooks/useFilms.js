import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import dataReducer, {
  CHARGER_DONNEES,
  CHANGER_STATUT_LOADING,
} from '../reducers/dataReducer'

const UseFilms = (etatInitial) => {
  const [state, dispatch] = useReducer(dataReducer, etatInitial)

  const obtenirFilms = async () => {
    try {
      const reponse = await axios({
        method: 'GET',
        url: 'http://localhost:5000/api/films',
      })
      dispatch({ type: CHARGER_DONNEES, payload: reponse.data })
    } catch (e) {
      console.log(e)
    } finally {
      dispatch({ type: CHANGER_STATUT_LOADING, payload: false })
    }
  }

  useEffect(() => {
    obtenirFilms()
  }, [])

  return [state, dispatch]
}

export default UseFilms
