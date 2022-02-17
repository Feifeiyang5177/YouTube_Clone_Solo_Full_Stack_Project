import React from "react";
import CommentIndexItem from "./comment_index_item";
import CreateCommentForm from "./comment_form_container";

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
      currentUser,
    } = this.props;
    const videoComments = (comments || []).filter((comment) => {
      return comment.video_id === video?.id;
    });
    let totalComments = videoComments.length;
    // debugger

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
              currentUser={currentUser}
              errors={errors}
            />
          </div>
        );
      })
    ) : (
      <div className="comment-title"></div>
    );

    return (
      <div className="comments-container">
        <div className="total-comments">
          <h1 className="comments-section">{totalComments} comments</h1>

          <div className="comments-section"></div>
          <div className="img-and-comment-input">
            <img
              className="comment-user-profile-img"
              src={window.userProfile2URL}
            />
            <CreateCommentForm
              className="input-box-and-buttons"
              video={video}
              currentUser={currentUser}
            />
          </div>
        </div>

        <div className="comments-list">{renderComments}</div>
        
      </div>
    );
  }
}

export default CommentIndex;
