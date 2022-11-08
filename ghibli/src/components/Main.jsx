import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import FilmList from './FilmList'

export default function Main () {
    return (
        <div>
           <Routes>
            <Route path ="/" element={<Home/>} />
            <Route exact path="/films" element={<FilmList />} />
            
            </Routes>
        </div>
    )
}