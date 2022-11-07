import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import FilmList from './components/FilmList'
import { useState, useEffect } from 'react'
import { BASE_URL } from './Globals'
import './App.css';
import axios from 'axios'

const App = () => {
 
  const [films, setFilmList] = useState ([])

  useEffect (() =>{
    const getFilmList =async () => {
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films`)
      setFilmList(response.data.results)
    }
    getFilmList()
  }, [])


  return (
    <div className="App">
      <FilmList films={films}/>
     </div>
  );
}

export default App;

// ${BASE_URL}