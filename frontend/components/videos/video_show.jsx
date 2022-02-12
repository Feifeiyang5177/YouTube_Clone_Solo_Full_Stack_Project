
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FiThumbsUp, FiThumbsDown, FiMoreHorizontal} from "react-icons/fi";
import {RiShareForwardLine} from "react-icons/ri";
import CreateCommentForm from "../comments/comment_form_container";
import CommentIndex from "../comments/comment_index_container";
// import VideoIndexItem from "./video_index_item";
// import VideoIndex from "./video_index";


class VideoShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          likes: 0,
          dislikes: 0
        }    
    }

    componentDidMount(){  
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.addViews(this.props.currentVideoId);
        this.props.fetchVideos();
        this.props.fetchComments();
    }

    render(){
        
        const {video, videos, currentUser} = this.props;
        if (!video ) return null;

        const videoIndex = (videos || []).map((vid, idx) => {
            if (video.id != vid.id){
            return (
             
              <div className="show-page-side-videos" key={idx}>
                <video
                  className="show-page-index-video"
                  src={vid.vdUrl}
                  controls
                ></video>
                <div className="s-p-s-v-description-container">
                  <div className="event-text-t">{vid.title}</div>
                  <div className="event-text">
                    {vid.creator.username}
                  </div>
                  <div className="event-text">{vid.view_count} views</div>
                </div>
              </div>
              
            );
            }else {
              return (
                <div></div>
              )
            }
        });
    

        return (
          <div className="video-show-page">
            <div className="video-container">
              <video className="singleVideo" src={video.vdUrl} controls></video>

              <div className="video-title-section">
                <div className="video-title-container">
                  <div className="video-title">{video.title}</div>
                </div>
                <div className="video-view-count-container">
                  <div className="video-view-count">
                    {video.view_count} views • {video.updatedAt}
                  </div>

                  <div className="video-likes-icons">
                    <div className="inner-content">
                      <button
                        className="likes-button"
                        onClick={() =>
                          this.setState({ likes: this.state.likes + 1 })
                        }
                      >
                        <FiThumbsUp className="icon" />
                      </button>
                      <div className="likes-num">{this.state.likes}</div>
                    </div>

                    <div className="inner-content">
                      <button
                        className="likes-button"
                        onClick={() =>
                          this.setState({ dislikes: this.state.dislikes + 1 })
                        }
                      >
                        <FiThumbsDown className="icon" />
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
                  <img
                    className="user-profile-img"
                    src={window.userProfile2URL}
                  />

                  <div className="content">
                    <div className="description-container">
                      <div className="creator">
                        <div className="creator-name">
                          {video.creator.username}
                        </div>
                      </div>
                      <div className="red-button">
                        <button className="subscribe-button">SUBSCRIBE</button>
                      </div>
                    </div>
                    <div className="description-content">
                      <div className="video-description">
                        {video.description}
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                <div className="v-d-s-2">
                  <div className="comment-content">
                    <CommentIndex className="comment-content" />
                  </div>
                </div>

                {/* <div className="v-d-s-3"> */}
                  {/* <img
                    className="user-profile-img"
                    src={window.userProfile2URL}
                  /> */}

                  {/* <div className="comment-container"> */}
                    {/* <div className="creator">
                      <div className="commenter-name">YaTube User</div>
                    </div> */}

                    {/* <div className="comment-content">
                      <p>First Comment</p> */}
                      {/* <div className="comment-content"> */}
                        {/* <CommentIndex  /> */}
                      {/* </div> */}

                      {/* <div className="comment-likes">
                        <div className="inner-content">
                          <FiThumbsUp className="icon" />
                          <div className="likes-num"> </div>
                          <FiThumbsDown className="icon" />
                          <div className="likes-num"> </div>
                        </div>
                      </div> */}

                    {/* </div> */}
                  {/* </div> */}
                </div>

                {/* <div> <CommentIndexItem/></div> */}
              {/* </div> */}
            </div>

            <div className="show-page-video-index">
              <div className="show-page-video-lines">{videoIndex}</div>
            </div>
          </div>
        );
    }
}

export default VideoShow