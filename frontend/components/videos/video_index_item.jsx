import React from "react";
import { render } from "react-dom";
// import { Link } from "react-router-dom";

const VideoIndexItem = (props) => {
    
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>      
                <div>Item page: Upload Videos</div>
                <br></br>
                <input type="file"  accept="video/*" />

            </div>
        )
    
}


































//     return (
//         <li className="videoItemContainer">
//             <Link to={`/watch/${video.id}`}>
//                 <div className="thumbnail-wrapper"> 
//                     <img className="thumbnail" src={video.thumbnail} />
//                 </div>

//                 <div>
//                     <p className="video-title">{video.title}</p>
//                         <section className="video-details">
//                             <span>{video.creator}</span>
//                             <p>{video.view_count} views <span>&#5867;</span> {video.doc}</p>
//                         </section>
//                 </div>
//             </Link>
//         </li>

//     )

// }

export default VideoIndexItem