import React from "react"
import {Link} from 'react-router-dom'
// import VideoIndex from '../videos/video_index'

const Home = () => {
    return(
        <div>
            <h2>Yatube Home Page</h2>
            <img className="logo-img" src="https://pmcvariety.files.wordpress.com/2017/02/angry-birds-blues-rovio.jpg?w=1000&h=750&crop=1" />
            <Link to='/videos'></Link>
            <Link to='/'></Link>
        </div>
    )

}

export default Home