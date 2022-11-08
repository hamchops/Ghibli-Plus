import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import FilmList from './FilmList'
import CharacterList from './Characters'

export default function Main () {
    return (
        <div>
           <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path="/films" element={<FilmList />} />
            <Route path="/species" element={<CharacterList />} />
            
            </Routes>
        </div>
    )
}