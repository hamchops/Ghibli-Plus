import {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../Globals'
import { useNavigate } from 'react-router-dom'

const FilmList = (props) => {
    

    let navigate = useNavigate()

    const showFilm = (film) => {
        navigate(`${film.title}`)
    }

 

    return (
       <div>
        {
            props.films.map((films) => (
                <div className="film-cover" onClick ={() => showFilm(films)} key={films.title}>
            <h3>{films.title}</h3>
            </div>
            ))
        }
         </div>
    )
 

}

export default FilmList

// const [getFilmList, setFilmList] = useState ({})

// useEffect (() => {
//     const getFilmList = async () => {
//     const response = axios.get(`${BASE_URL}/films`)
//     setFilmList(await response.data.results)
//     console.log(`${BASE_URL}/films`)
//     }
//     getFilmList()
// }, [])