// import React from "react";
// import { connect } from "react-redux";
// import { fetchVideos} from "../../actions/videos_action";
// import VideoShowSideItem from "./video_show_side_item";


// class VideoShowSideIndex extends React.Component {
//   render() {
//     const { videos, videoId } = this.props;
//     const sideVideoIndex = videos.filter(
//       (video) => video.id !== videoId
//     );

//     return (
//       <div className="show-page-video-lines">
//         {sideVideoIndex.map((vid, idx) => (
//           <VideoShowSideItem key={idx} video={vid} />
//         ))}
//       </div>
//     );
//   }
// }

// const mSTP = (state) => ({

//   videos: Object.values(state.entities.videos),

// });

// const mDTP = (dispatch) => ({
  
//   fetchVideos: () => dispatch(fetchVideos()),
    
// });

// export default connect(mSTP, mDTP)(VideoShowSideIndex);
