

import React from 'react';
import {FiThumbsUp, FiThumbsDown, FiMoreHorizontal} from "react-icons/fi";
import {RiShareForwardLine} from "react-icons/ri";


class VideoShow extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
       
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render(){
        
        const {video} = this.props;
        return (
            <div className="video-show-page">
                <div className="video-container">
                    <video className="singleVideo" src={video.vdUrl} controls></video>

                    <div className="video-title-section">

                            <div className="video-title-container">
                                    <div className="video-title">{video.title}</div>
                            </div>
                            <div className="video-view-count-container">
                                    <div className="video-view-count"> 32 views  •  Nov 8, 2021</div>
                                    <div className="video-likes-icons">

                                            <div className='inner-content'>
                                                <FiThumbsUp className='icon' /> 
                                                <div className='likes-num'> 16</div>
                                            </div>

                                            <div className='inner-content'>
                                                <FiThumbsDown className='icon'/>
                                                <div className='likes-num'> 2</div>
                                            </div>

                                            <div className='inner-content'>
                                                <RiShareForwardLine className='icon'/>
                                                <div className='likes-num'>SHARE</div>
                                            </div>

                                            <FiMoreHorizontal className='icon'/>                                    
                                    </div>
                            </div>
                    </div>

                    <div className='video-description-section'>
                        <img className='user-profile-img' src={window.userProfile2URL}/>

                        <div className='content'>
                            <div className="description-container">
                                <div className='creator'>
                                    <div className='creator-name'>YaTube User</div>
                                </div>
                                <div className='red-button'>
                                <button className='subscribe-button'>SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='description-content'>
                                <div className='video-description'>{video.description}</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default VideoShow