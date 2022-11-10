import React from 'react'
import WallPaper from '../WallPaper.jpg'


function Home (props) {
    return (
        <div>
            <h1 className='title' > Ghibli +</h1>


            <div className='wallpaper'>
            <img src={WallPaper} alt="totoro"/>
            </div>
        
        </div>
    )
}

export default Home