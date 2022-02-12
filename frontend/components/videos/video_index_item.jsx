import React, { useState } from "react";
import { Link } from "react-router-dom";


class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    this.props.video.view_count += 1;
  }

//   componentDidMount() {
//     // this.props.fetchVideo(this.props.match.params.videoId);
//     // this.props.addViews(this.props.currentVideoId);
//     this.props.fetchVideos();
//   }

  render() {
    const { video, currentUser } = this.props;

    const timeNow = new Date();
    const oldTime = new Date(video.created_at);
    const time = timeNow - oldTime;
    const timeDays = Math.round(time / (1000 * 3600 * 24));
    const timeAgo =
      timeDays < 1
        ? "less than 1 day ago"
        : timeDays === 1
        ? "1 day ago"
        : `${timeDays} days ago`;

    return (
      <div className="video-index-item-page">
        <div className="video-section">
          <Link to={`videos/${video.id}`}>
            <video
              className="group-video-each"
              src={video.vdUrl}
              controls
            ></video>
          </Link>
          <div className="group-video-title-container">
            <div className="group-video-title">{video.title}</div>
            <div className="group-video-creator">{video.creator.username}</div>
            <div className="group-video-creator">
              {/* {video.view_count} views • {video.updated_at} days ago */}
              {video.view_count} views • {timeAgo}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoIndexItem







































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

// export default VideoIndexItem