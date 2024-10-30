import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { collectionFilms } from '../data/films';

const UseFilms = () => {

  const [films, setFilms] = useState(collectionFilms)
  const [loading, setLoading] = useState(true)

  const obtenirFilms = async () => {
    try {
      const reponse = await axios({
        method: 'GET',
        url: 'http://localhost:5000/api/films',
      })
      setFilms(reponse.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    obtenirFilms()
  }, [])

  return {films, loading}
}

export default UseFilms;
