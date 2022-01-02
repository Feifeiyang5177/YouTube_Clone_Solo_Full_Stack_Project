

// import React from 'react';
// import {FiThumbsUp, FiThumbsDown, FiMoreHorizontal} from "react-icons/fi";
// import {RiShareForwardLine} from "react-icons/ri";


// class VideoShow extends React.Component {
//     constructor(props){
//         super(props);

//     }

//     componentDidMount(){  
//         this.props.fetchVideo(this.props.match.params.videoId);
        
//     }

//     render(){
        
//         const {video} = this.props;
      
//         return (
//           <div className="video-show-page">
//             <div className="video-container">
//               <video className="singleVideo" src={video.vdUrl} controls></video>

//               <div className="video-title-section">
//                 <div className="video-title-container">
//                   <div className="video-title">{video.title}</div>
//                 </div>
//                 <div className="video-view-count-container">
//                   <div className="video-view-count">
//                     {" "}
//                     32 views • Nov 8, 2021
//                   </div>
//                   <div className="video-likes-icons">
//                     <div className="inner-content">
//                       <FiThumbsUp className="icon" />
//                       <div className="likes-num"> 16</div>
//                     </div>

//                     <div className="inner-content">
//                       <FiThumbsDown className="icon" />
//                       <div className="likes-num"> 2</div>
//                     </div>

//                     <div className="inner-content">
//                       <RiShareForwardLine className="icon" />
//                       <div className="likes-num">SHARE</div>
//                     </div>

//                     <FiMoreHorizontal className="icon" />
//                   </div>
//                 </div>
//               </div>

//               <div className="video-description-section">
//                 <img
//                   className="user-profile-img"
//                   src={window.userProfile2URL}
//                 />

//                 <div className="content">
//                   <div className="description-container">
//                     <div className="creator">
//                       <div className="creator-name">YaTube User</div>
//                     </div>
//                     <div className="red-button">
//                       <button className="subscribe-button">SUBSCRIBE</button>
//                     </div>
//                   </div>
//                   <div className="description-content">
//                     <div className="video-description">{video.description}</div>
//                   </div>
//                 </div>
//               </div>
//               <p>ALL VIDEOS</p>
//             </div>
//           </div>
//         );
//     }
// }

// export default VideoShow



import React from 'react';
import { Link } from "react-router-dom";
import {FiThumbsUp, FiThumbsDown, FiMoreHorizontal} from "react-icons/fi";
import {RiShareForwardLine} from "react-icons/ri";
// import VideoIndexItem from "./video_index_item";
// import VideoIndex from "./video_index";


class VideoShow extends React.Component {
    constructor(props){
        super(props);


    }

    componentDidMount(){  
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.fetchVideos();
    }

    render(){
        
        const {video, videos} = this.props;
        const videoIndex = (videos || []).map((vid, idx) => {
            if (video.id != vid.id){
            return (
              //   <Link to={`videos/${video.id}`} key={idx}>
              <div className="show-page-side-videos" key={idx}>
                <video
                  className="show-page-index-video"
                  src={vid.vdUrl}
                  controls
                ></video>
                <div className="s-p-s-v-description-container">
                  <div className="event-text-t">{vid.title}</div>
                  <div className="event-text">{vid.description}</div>
                  <div className="event-text">Created by user {vid.creator_id}</div>
                  <div className="event-text">{vid.view_count} views</div>
                </div>
              </div>
              //   </Link>
            );
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
                    {video.view_count} views • {video.created_at}
                  </div>
                  <div className="video-likes-icons">
                    <div className="inner-content">
                      <FiThumbsUp className="icon" />
                      <div className="likes-num"> 16</div>
                    </div>

                    <div className="inner-content">
                      <FiThumbsDown className="icon" />
                      <div className="likes-num"> 2</div>
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
                        <div className="creator-name">YaTube User</div>
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
                  <div className="comments-section">Comments</div>
                  <div className="img-and-comment-input">
                    <img
                      className="comment-user-profile-img"
                      src={window.userProfile2URL}
                    />
                    <div className="input-box-and-buttons">
                      <input
                        className="comments-input"
                        type="text"
                        placeholder="Add a public comment..."
                      ></input>
                      <div className="comment-imput-buttons">
                        {/* <div className="floating-buttons"> */}
                        <button className="actual-button-comment">
                          COMMENT
                        </button>
                        <button className="actual-button-cancel">CANCEL</button>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="v-d-s-3">
                  <img
                    className="user-profile-img"
                    src={window.userProfile2URL}
                  />

                  <div className="comment-container">
                    <div className="creator">
                      <div className="commenter-name">YaTube User</div>
                    </div>

                    <div className="comment-content">
                      <p>comments go here</p>

                      <div className="comment-likes">
                        <div className="inner-content">
                          <FiThumbsUp className="icon" />
                          <div className="likes-num"> 16</div>
                          <FiThumbsDown className="icon" />
                          <div className="likes-num"> 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div classsName="show-page-video-index">
              <div className="show-page-video-lines">{videoIndex}</div>
            </div>
          </div>
        );
    }
}

export default VideoShow