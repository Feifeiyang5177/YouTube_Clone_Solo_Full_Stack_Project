import React from "react";
import { Link } from "react-router-dom";
// import StarRatings from "react-star-ratings";

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.changeRating = this.changeRating.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  componentDidMount() {
    if (this.props.formType === "edit") {
      this.props.fetchComment(this.props.match.params.commentId);
    }
    if (this.props.errors?.length) {
      this.props.clearErrors();
    }
  }
  renderErrors() {
    return (
      <ul >
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser, comments, video } = this.props;

    if (currentUser) {
      this.props.createComment(this.state);
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
      .then(() => this.props.history.push("/"));
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
        {/* {errors?.length ? this.renderErrors() : null} */}
        <div className="input-box-and-buttons">
          {/* <textarea
            // className="textare-field"
            // cols="50"
            // rows="5"
            value={this.state.content}
            onChange={this.updateContent}
          ></textarea> */}
          <input
            className="comments-input"
            value={this.state.body}
            onChange={this.updateContent}
            type="text"
            placeholder="Add a public comment..."
          ></input>
        </div>
        <div className="comment-imput-buttons">
          <button className="actual-button-comment" type="submit">
            {submitButton}
          </button>
          <button className="actual-button-cancel">CANCEL</button>
        </div>
      </form>
    );
  }
}

export default CreateCommentForm;
