import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div className="navbar">
            <Link className="homebtn" to = "/"> Home </Link>
            <Link className="filmbtn" to = "/films"> Films </Link>
            <Link className="characterbtn" to = "/species"> Characters </Link>

        </div>
    )
}