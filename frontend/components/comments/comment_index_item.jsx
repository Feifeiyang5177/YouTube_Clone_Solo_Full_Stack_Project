import React from "react";
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
    const { comment, currentUserId } = this.props;

    return (
      <div className="comment">
        <p className="email">{comment.commenter.email}</p>
        <div className="comment">
          {/* <div className="review-rating-container">
            <div className="review-rating">{ratings}</div>
          </div>  */}
          <div className="commemnt-body">
            <p>{comment.body}</p>
          </div>

          {currentUserId.id === comment?.commenter_id ? (
            <div className="edit-delete-buttons">
              <Link to={`/comments/${comment.id}/edit`} className="edit-review">
                <button className="review-btn btn">Edit</button>
              </Link>
              <button
                className="review-btn btn"
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
    );
  }
}

export default CommentIndexItem;
