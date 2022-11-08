import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div className="navbar">
            <Link to = "/"> Home </Link>
            <Link to = "/films"> Films </Link>
            < Link to = "/species"> Characters </Link>
        </div>
    )
}