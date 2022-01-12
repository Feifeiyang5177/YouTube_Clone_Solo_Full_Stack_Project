import React, { useState } from "react";
import { ReactReduxContext } from "react-redux";
import SearchBar from "./search_bar"

class SearchBarIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
      this.props.fetchVideos()  

  }; 

  render() {
      const {videos} = this.props;
      const VideoItems = (videos || []).map((video) => (
          <SearchBar key={video.id} video={video}/>
      ))
      return(
      <div>{VideoItems}</div>
      )
  }

}

export default SearchBarIndex
