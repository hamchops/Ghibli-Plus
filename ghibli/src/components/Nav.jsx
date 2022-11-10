import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        <div className="navbar">
           <btn> <Link className="homebtn" to = "/"> Home </Link></btn>
            <Link className="filmbtn" to = "/films"> Films </Link>
            <Link className="characterbtn" to = "/species"> Characters </Link>

        </div>
    )
}