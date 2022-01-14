import React, { useState } from "react";
import VideoIndexItem from './video_index_item';


class VideoIndex extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
      this.props.fetchVideos()  
  }; 
  
  render(){
    const {videos} = this.props;
    const VideoItems = (videos || []).map((video) => (
      <VideoIndexItem key={video.id} video={video}/>
    ));
    return (
      <div className="video-index-page">
        <p className="search-result-title">Search Result:</p>
        <div className="video-lines">{VideoItems}</div>
      </div>
    );
  }

}

export default VideoIndex


