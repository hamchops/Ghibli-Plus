import { useState, useEffect } from 'react'
import axios from 'axios'




export default function CharacterList () {

    const [characterList, setCharacterList] = useState (null)

    useEffect (() => {

        const getData = async () =>{
        const response = await axios.get(`https://ghibliapi.herokuapp.com/species`)
        setCharacterList(response.data)
        console.log(response.data)
        
    }

    getData()
    
}, [])
if (!characterList){
    return <h2>loading</h2>
} else {
    return (
        <div className="character-list">

            { characterList.map((species) =>(
                <div key={species.name}>
            <h3> {species.name} {species.people} </h3>
            {
            // <img style={{display:"flex"}} src={species.movie_banner} alt={film.title} /> */
            }
            </div>))}

        </div>
    )
}
}