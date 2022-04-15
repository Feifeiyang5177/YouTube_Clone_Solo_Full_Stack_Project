import React from "react";


class SearchResult extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    const { video} = this.props;

    // const timeNow = new Date();
    // const oldTime = new Date(video.created_at);
    // const time = timeNow - oldTime;
    // const timeDays = Math.round(time / (1000 * 3600 * 24));
    // const timeAgo =
    //   timeDays < 1
    //     ? "less than 1 day ago"
    //     : timeDays === 1
    //     ? "1 day ago"
    //     : `${timeDays} days ago`;

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
              {video.view_count} views • {timeAgo}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult
