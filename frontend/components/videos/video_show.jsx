
import React from "react";
import {FiThumbsUp, FiThumbsDown, FiMoreHorizontal} from "react-icons/fi";
import {RiShareForwardLine} from "react-icons/ri";
import CommentIndex from "../comments/comment_index_container";
import NavBar from "../nav_bar/nav_bar_container";
// import LikesCount from "../likes/likes_container";
import { Link } from "react-router-dom";
// import SideBar from "../side_bar/side_bar";
// import Likes from "../likes/likes_container";
// import Upload from "../nav_bar/video_upload";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
// import VideoIndexItem from "./video_index_item";
// import VideoShowSideIndex from "./video_show_side_index"



class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }

  componentDidMount() {
    this.props.fetchVideos();
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  getLikeIconClasses() {
    return this.state.likes === 0 ? (
      <div>
        {" "}
        <FiThumbsUp className="icon" />
      </div>
    ) : (
      <div>
        <RiThumbUpFill className="icon" />
      </div>
    );
  }

  getDislikeIconClasses() {
    return this.state.dislikes === 0 ? (
      <div>
        <FiThumbsDown className="icon" />
      </div>
    ) : (
      <div>
        <RiThumbDownFill className="icon" />
      </div>
    );
  }

  render() {
    // debugger
    const { video, videos } = this.props;
    if (!video) return null;

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
 
    if (!video) return null;

    const videoIndex = (videos || []).map((vid, idx) => {
      if (video.id != vid.id) {
        // debugger
        return (
          <div className="show-page-side-videos" key={idx}>
            <Link to={`/videos/${vid.id}`}>
            <video
              className="show-page-index-video"
              src={vid.vdUrl}
              controls
            ></video>
            </Link>
            <div className="s-p-s-v-description-container">
              <div className="event-text-t">{vid.title}</div>
              <div className="event-text">{vid.creator.username}</div>
              <div className="event-text"> {vid.view_count} views</div>
              <div className="event-text"> {timeAgo}</div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div className="video-show-page">
        <div>
          <NavBar />
        </div>
        <div className="video-container">
          <video className="singleVideo" src={video.vdUrl} controls></video>

          <div className="video-title-section">
            <div className="video-title-container">
              <div className="video-title">{video.title}</div>
            </div>
            <div className="video-view-count-container">
              <div className="video-view-count">
                {video.view_count} views •{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(oldTime)}
              </div>

              <div className="video-likes-icons">
                <div className="inner-content">
                  <button
                    className="likes-button"
                    onClick={() =>
                      this.setState({
                        likes: (this.state.likes = 1),
                        dislikes: (this.state.dislikes = 0),
                      })
                    }
                  >
                    {/* <FiThumbsUp className="icon" /> */}
                    {this.getLikeIconClasses()}
                  </button>
                  <div className="likes-num">{this.state.likes}</div>
                </div>

                <div className="inner-content">
                  <button
                    className="likes-button"
                    onClick={() =>
                      this.setState({
                        dislikes: (this.state.dislikes = 1),
                        likes: (this.state.likes = 0),
                      })
                    }
                  >
                    {/* <FiThumbsDown className="icon" /> */}
                    {this.getDislikeIconClasses()}
                  </button>
                  <div className="likes-num"> {this.state.dislikes}</div>
                </div>

                <div className="inner-content">
                  <RiShareForwardLine className="icon" />
                  <div className="likes-num">SHARE</div>
                </div>
                <FiMoreHorizontal className="icon" />
              </div>
            </div>
          </div>

          <div className="video-description-section">
            <div className="v-d-s-1">
              <img className="user-profile-img" src={window.userProfile2URL} />

              <div className="content">
                <div className="description-container">
                  <div className="creator">
                    <div className="creator-name">{video.creator.username}</div>
                  </div>
                  <div className="red-button">
                    <button className="subscribe-button">SUBSCRIBE</button>
                  </div>
                </div>
                <div className="description-content">
                  <div className="video-description">{video.description}</div>
                </div>
              </div>
            </div>
            {/* </div> */}

            <div className="v-d-s-2">
              <div className="comment-content">
                <CommentIndex className="comment-content" />
              </div>
              {/* <Likes /> */}
              {/* <Upload /> */}
            </div>
          </div>
        </div>
        <div className="show-page-video-index">
          <div className="show-page-video-lines">{videoIndex}</div>
        </div>
        {/* <div className="show-page-video-index">
          <div className="show-page-video-lines"><VideoShowSideIndex videoId={video.id}/></div>
        </div> */}
        
      </div>
    );
  }
}

export default VideoShow