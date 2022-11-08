import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Globals'



export default function FilmList () {

    const [filmList, setFilmList] = useState (null)

    useEffect (() => {

        const getData = async () =>{
        const response = await axios.get(`https://ghibliapi.herokuapp.com/films`)
        setFilmList(response.data)
        console.log(response.data)
        
    }

    getData()
    
}, [])
if (!filmList){
    return <h2>loading</h2>
} else {
    return (
        <div className="movie-list">

         {/* <div className="movie-poster" > */}
            { filmList.map((film) =>(
                <div className="box"  key={film.title}>
            <h3 className="filmline1"> {film.title}
            ({film.original_title})</h3>
            <img className="movie-poster" style={{display:"flex"}} src={film.movie_banner} alt={film.title} />
                </div>))}
            {/* </div> */}
        </div>
    )
}
}
// gameData.map((game) =>(
// <img style={{display:"block"}} src={game.background_image} alt={game.name} />
// // const [getFilmList, setFilmList] = useState ({})

// // useEffect (() => {
//     const getFilmList = async () => {
//     const response = axios.get(`${BASE_URL}/films`)
//     setFilmList(await response.data.results)
//     console.log(`${BASE_URL}/films`)
//     }
//     getFilmList()
// }, [])