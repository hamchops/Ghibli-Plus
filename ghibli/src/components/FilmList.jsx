import { useState, useEffect } from 'react'
import axios from 'axios'

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
        <div>
            
        <h1 className='title' > Ghibli +</h1>
            
        <div className="movie-list">
           
         {/* <div className="movie-poster" > */}
            { filmList.map((film) =>(
                <div className="box"  key={film.title}>
            <h3 className="filmline1"> {film.title}
            ({film.original_title})</h3>
            <a href="https://ghibliapi.herokuapp.com/films" target="_blank">
            <img className="movie-poster" style={{display:"flex"}} src={film.movie_banner} alt={film.title} />
            </a>
                </div>))}
            {/* </div> */}
        </div>
        </div>


    )
}

}
