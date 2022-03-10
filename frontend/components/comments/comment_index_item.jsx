import React from "react";
import {Link} from "react-router-dom";
import { FiThumbsUp, FiThumbsDown, FiMoreHorizontal } from "react-icons/fi";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      dislikes: "",
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    // e.preventDefault();
    this.props.updateComment(this.props.comment);
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment.id);
  }

  getLikeIconClasses() {
    return this.state.likes === "" ? (
      <div>
       
        <FiThumbsUp className="comment-icon" />
      </div>
    ) : (
      <div>
        <RiThumbUpFill className="comment-icon" />
      </div>
    );
  }

  getDislikeIconClasses() {
    return this.state.dislikes === "" ? (
      <div>
        <FiThumbsDown className="comment-icon" />
      </div>
    ) : (
      <div>
        <RiThumbDownFill className="comment-icon" />
      </div>
    );
  }

  render() {
    const { comment, currentUser } = this.props;

    return (
      <div className="v-d-s-3">
        <img className="commenter-profile-img" src={window.userProfile2URL} />

        <div className="comment-container">
          <div className="comment-creator">
            <p className="commenter-name">{comment.commenter.username}</p>
          </div>

          <div className="comment-content">
            {/* <div className="commemnt-body"> */}
            <p className="comment-body">{comment.body}</p>
            {/* </div> */}

            <div className="comment-likes">
              <div className="inner-content">
                <button
                  className="comment-likes-button-1"
                  onClick={() =>
                    this.setState({
                      likes: 1,
                      dislikes: "",
                    })
                  }
                >
                  {this.getLikeIconClasses()}
                  {/* <FiThumbsUp className="comment-icon" /> */}
                </button>

                <div className="likes-num">{this.state.likes}</div>
                <button
                  className="comment-likes-button-2"
                  onClick={() =>
                    this.setState({
                      dislikes: 1,
                      likes: "",
                    })
                  }
                >
                  {/* <FiThumbsDown className="comment-icon" /> */}
                  {this.getDislikeIconClasses()}
                </button>
                <div className="likes-num">{this.state.dislikes}</div>
              </div>

              {/* if currentUser, check the id, if not, ignor it.  */}
              {currentUser?.id === comment?.commenter_id ? (
                <div className="edit-delete-buttons">
                  <Link
                    to={`/comments/edit/${comment.id}`}
                    className="edit-review"
                  >
                    <button
                      className="comment-btn"
                      type="edit"
                      onClick={() => this.handleEdit()}
                    >
                      Edit
                    </button>
                  </Link>
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
      </div>
    );
  }
}

export default CommentIndexItem;
