import React from "react";
import { Link } from "react-router-dom";


class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors();
    if (this.props.formType === "update") {
      this.props.fetchComment(this.props.match.params.commentId);
    }
    if (this.props.errors?.length) {
      this.props.clearErrors();
    }
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="comment-error-messages" key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser} = this.props;
    // debugger
    if (currentUser) {
      const newComment = this.state;
      newComment.video_id = parseInt(this.props.videoId);
      this.props.createComment(newComment);
      this.setState({ body: "" });
    } else {
      this.props.history.push("/login");
    } 
  }

  updateContent(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }
  
  handleUpdate(e) {
    e.preventDefault();
    this.props
      .updateComment(this.state)
      .then(() => this.props.history.push(`/videos/${this.props.comment.video_id}`));
  }

  render() {
    if (this.state === null) {
      return null;
    }
    const { errors } = this.props;
    const submitButton =
      this.props.formType === "create" ? "COMMENT" : "EDIT";
    const submit =
      this.props.formType === "create" ? this.handleSubmit : this.handleUpdate;

    return (
      <form className="input-box-and-buttons" onSubmit={submit}>
        <div className="input-box-and-buttons">
          <input
            className="comments-input"
            value={this.state.body}
            onChange={this.updateContent}
            type="update"
            placeholder="Add a public comment..."
          ></input>
        </div>

        <div className="comment-input-buttons">
          {/* {errors?.length ? this.renderErrors() : null} */}
          {this.renderErrors()}
          <button className="actual-button-comment" type="submit">
            {submitButton}
          </button>
          <button className="actual-button-cancel" >CANCEL</button>
        </div>
      </form>
    );
  }
}

export default CreateCommentForm;
