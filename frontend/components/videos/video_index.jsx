import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            thumbnailFile: ""
            // videos: [] 
            // thumbnailUral
            // videos is a key, 
        }
       
    }

    componentDidMount(){
        this.props.fetchVideos();

    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('post[title]', this.state.title);
        if (this.state.thumbnailFile) {
          formData.append('video[thumbnail]', this.state.thumbnailFile);
        }

        //   formDate is an object like object. Here we are assigning key thumbnail
        // with a url submited by the user. video is the outer key in the strong pramas.
        //   match with the strong params's require video
        $.ajax({
          url: '/api/videos',
          method: 'POST',
          data: formData,
          contentType: false,
          processData: false
        });
      }

    handleFile(e){
        e.preventDefault();
        return this.setState({ thumbnailFile: e.currentTarget.files[0] })

    }

    render (){
        const {videos} = this.props
    console.log(this.props)
        return (
        <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        {/* <label htmlFor="post-body">Body of Post</label>
        <input type="text"
          id="post-body"
          value={this.state.title}
          onChange={this.handleInput.bind(this)}/> */}
        <input type="file"
          onChange={this.handleFile.bind(this)}/>
        {/* <h3>Image preview </h3>
        {preview} */}
        <button>Upload video (thumbnail)!</button>
      </form>
      {/* <img src={this.props.videos[0].thumbnailUrl} /> */}
      <p>

          {console.log(this.props.videos)}
      </p>
      </div>


            // <div className="main-content-videos"> 
            //     <div className="recomended"> Video Index Page: Recommended</div>   
            //     <div className="videos-outer-wrapper">
            //     <input type="file" />
                   
            //         <ul className="videos-container">
            //                 { videos.map(video => {
            //                     return <VideoIndexItem key={video.id} video={video}/>
            //                 }) }
            //         </ul>

            //     </div>
            // </div>
        )
    }
}

export default VideoIndex


























// class VideoIndex extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             thumbnailFile: ""
//             // videos: [] 
//             // thumbnailUral
//             // videos is a key, 
//         }
       
//     }

//     componentDidMount(){
//         this.props.fetchVideos();

//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         // formData.append('post[title]', this.state.title);
//         if (this.state.thumbnailFile) {
//           formData.append('video[thumbnail]', this.state.thumbnailFile);
//         }

//         //   formDate is an object like object. Here we are assigning key thumbnail
//         // with a url submited by the user. video is the outer key in the strong pramas.
//         //   match with the strong params's require video
//         $.ajax({
//           url: '/api/posts',
//           method: 'POST',
//           data: formData,
//           contentType: false,
//           processData: false
//         });
//       }

//     handelFile(e){
//         debugger

//     }

//     render (){
//         const {videos} = this.props
//         return (
//             <div className="main-content-videos"> 
//                 <div className="recomended"> Video Index Page: Recommended</div>   
//                 <div className="videos-outer-wrapper">
//                 <input type="file" />
                   
//                     <ul className="videos-container">
//                             { videos.map(video => {
//                                 return <VideoIndexItem key={video.id} video={video}/>
//                             }) }
//                     </ul>

//                 </div>
//             </div>
//         )
//     }
// }

// export default VideoIndex