import React from "react";
import { FiThumbsUp, FiThumbsDown, FiMoreHorizontal } from "react-icons/fi";
// import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
// import { Link } from "react-router-dom";
class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.updateComment(this.props.comment);
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const { comment, currentUser } = this.props;

    return (
      <div className="v-d-s-3">
        <img className="user-profile-img" src={window.userProfile2URL} />

        <div className="comment-container">
          <div className="creator">
            <p className="commenter-name">{comment.commenter.username}</p>
          </div>

          <div className="comment-content">
            {/* <div className="commemnt-body"> */}
            <p>{comment.body}</p>
            {/* </div> */}

            <div className="comment-likes">
              <div className="inner-content">
                <FiThumbsUp className="icon" />
                <div className="likes-num"> </div>
                <FiThumbsDown className="icon" />
                <div className="likes-num"> </div>
              </div>
            </div>

            {currentUser.id === comment?.commenter_id ? (
              <div className="edit-delete-buttons">
                {/* <Link to={`/comments/${comment.id}/edit`} className="edit-review"> */}
                <button className="comment-btn">Edit</button>
                {/* </Link> */}
                <button
                  className="comment-btn"
                  type="submit"
                  onClick={() => this.handleDelete()}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
