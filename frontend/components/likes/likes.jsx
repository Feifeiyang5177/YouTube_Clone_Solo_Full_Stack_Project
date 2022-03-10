import React, { useState, useEffect, useRef, useContext } from "react";
// import { useParams } from "react-router";
// import { NotiContext } from "../../context/noti_context";
// import Tooltip from "../tooltip/tooltip";
// import DislikeButton from "./dislike_button";
// import LikeButton from "./like_button";
import { FiThumbsUp, FiThumbsDown, FiMoreHorizontal } from "react-icons/fi";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";



class LikesCount extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.like;
    this.state = {
      likes: "",
      dislikes: "",
    }; 
    this.formateCount = this.formateCount.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLikes = this.handleLikes.bind(this)

  }

  // changeLikeStatus = (type) => {
  //   if (type === "like") setLikeStatus(1);
  //   if (type === "dislike") setLikeStatus(-1);
  //   if (type === "nolikes") setLikeStatus(0);
  // };

  // changeLikeType(likeType) {
  //   this.setState({ like: likeType });
  // }


  handleLikes() {
    const { currentUser } = this.props;

    if (currentUser) {
      // this.props.createLike(this.state);
      this.setState({ likes: 1, dislikes: ""});
    } else {
      this.props.history.push("/login");
    }
  }

  handleDelete() {
    const { currentUser } = this.props;
    if (currentUser) {
     this.setState({ likes: "", dislikes: 1});
     } else {
      this.props.history.push("/login")
     };
   
    // this.props.deleteLike(this.props.like.id);
   
  }

  getLikeIconClasses() {
    return this.state.likes === "" ? (
      <div>
        <FiThumbsUp className="icon" />
      </div>
    ) : (
      <div>
        <RiThumbUpFill className="icon" />
      </div>
    );
  }


  getDislikeIconClasses() {
    return this.state.dislikes === "" ? (
      <div>
        <FiThumbsDown className="icon" />
      </div>
    ) : (
      <div>
        <RiThumbDownFill className="icon" />
      </div>
    );
  }

  formateCount() {
    return this.state.likes === 0 ? "" : this.state.likes;
  }

  render() {
    if (this.state === null) {
      return null;
    }

    return (
      <div className="v-s-p-likes-buttons">
        <button className="likes-button" onClick={() => this.handleLikes()}>
          {this.getLikeIconClasses()}
        </button>
        {this.state.likes}
        <button
          className="likes-button"
          onClick={() => this.handleDelete()}
        >
          {this.getDislikeIconClasses()}
          
        </button>
       
      </div>
    );
  }

}
export default LikesCount
