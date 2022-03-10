// import React from "react";
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// class VideoShowSideItem extends React.Component {
//     constructor(props){
//     super(props)
//     }

//     render () {
//         const { video } = this.props;
//         const timeNow = new Date();
//         const oldTime = new Date(video.created_at);
//         const time = timeNow - oldTime;
//         const timeDays = Math.round(time / (1000 * 3600 * 24));
//         const timeAgo =
//         timeDays < 1
//             ? "less than 1 day ago"
//             : timeDays === 1
//             ? "1 day ago"
//             : `${timeDays} days ago`;

//             return (
//             <div className="show-page-side-videos">
//                 <Link to={`/videos/${video.id}`} > 
              
//                 <video
//                 className="show-page-index-video"
//                 src={video.vdUrl}
//                 controls
//                 ></video>
//                 </Link>

//                 <div className="s-p-s-v-description-container">
//                 <div className="event-text-t">{video.title}</div>
//                 <div className="event-text">{video.creator.username}</div>
//                 <div className="event-text"> {video.view_count} views</div>
//                 <div className="event-text"> {timeAgo}</div>
//                 </div>
               
//             </div>
           
//             );
//     }
//     }

// export default withRouter (VideoShowSideItem)
