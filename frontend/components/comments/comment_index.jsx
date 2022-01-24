import React from "react";
import CommentIndexItem from "./comment_index_item";
// import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
// import { MdStars } from "react-icons/md";
// import StarRatings from "react-star-ratings";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const {
      comments,
      video,
      updateComment,
      deleteComment,
      errors,
      currentUserId,
    } = this.props;
    const videoComments = (comments || []).filter((comment) => {
      return comment.video_id === video?.id;
    });
    let totalComments = videoComments.length;

    const renderComments = videoComments.length ? (
      (videoComments || []).map((comment, i) => {
        return (
          <div key={`${comment.id}-${i}`}>
            <CommentIndexItem
              key={i}
              comment={comment}
              commentId={comment.id}
              updateComment={updateComment}
              deleteComment={deleteComment}
              currentUserId={currentUserId}
              errors={errors}
            />
          </div>
        );
      })
    ) : (
      <div className="comment-title">Write the first comment for this video</div>
    );

    return (
      <div className="comments-container">
        <div className="total-comments">
          <h1>{totalComments} comments</h1>

        </div>
        
        <div className="comments-list">{renderComments}</div>
      </div>
    );
  }
}

export default CommentIndex;
