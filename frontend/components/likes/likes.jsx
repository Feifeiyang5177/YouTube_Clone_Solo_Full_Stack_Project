import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router";
import { NotiContext } from "../../context/noti_context";
import Tooltip from "../tooltip/tooltip";
import DislikeButton from "./dislike_button";
import LikeButton from "./like_button";

function LikeInterface(props) {
  const {
    currentUser,
    currentUserId,
    likeableType,
    likeableId,
    numLikes,
    numDislikes,
    createLike,
    deleteLike,
  } = props;

  let { id } = useParams();
  const likesRatioRef = useRef(null);
  const { addNoti } = useContext(NotiContext);
  // 0 == no likes, 1 == liked, -1 == disliked
  const [likeStatus, setLikeStatus] = useState(0);

  // check if newLike is already in users slice of state
  let isLiked;
  if (currentUserId) isLiked = currentUser[`liked${likeableType}s`][likeableId];

  const changeLikeStatus = (type) => {
    if (type === "like") setLikeStatus(1);
    if (type === "dislike") setLikeStatus(-1);
    if (type === "nolikes") setLikeStatus(0);
  };

  // if not liked and not logged in, set likeStatus to 0
  useEffect(() => {
    if (currentUserId && isLiked) changeLikeStatus(isLiked.version);
    else changeLikeStatus("nolikes");
  }, [id, currentUserId]);

  const handleLikeBar = () => {
    let percentLikes = (numLikes / (numLikes + numDislikes)) * 100;
    if (numLikes === 0 && numDislikes === 0) percentLikes = 50;

    likesRatioRef.current.style.flexBasis = `${percentLikes}%`;
  };

  useEffect(() => {
    if (likeableType === "Video") handleLikeBar();
  }, [numLikes, numDislikes]);

  /////////////////////////
  // HANDLE LIKE BEGINS //
  ///////////////////////
  async function handleLike(version) {
    if (!currentUserId) {
      return addNoti({
        mode: "fail",
        message: `Must sign-in to ${version} ${likeableType.toLowerCase()}s`,
      });
    }

    // create newLike obj from passed down props for later use
    const newLike = {
      likeable_type: likeableType,
      likeable_id: likeableId,
      version: version,
    };

    if (isLiked && isLiked.version === version) {
      // deleteLike, if liked version and liking version is the same {eg: dislike == dislike}
      changeLikeStatus("nolikes");
      await deleteLike(isLiked.id);

      if (likeableType === "Video" && version === "like")
        addNoti({ mode: "success", message: "Removed from Liked videos" });
      if (likeableType === "Video" && version === "dislike")
        addNoti({ mode: "success", message: "Dislike removed" });

      return;
    }

    // deleteLike then createLike, if liked version and liking version isn't the same
    if (isLiked && isLiked.version != version) {
      await deleteLike(isLiked.id);
      await createLike(newLike);
      changeLikeStatus(version);

      if (likeableType === "Video" && version === "like")
        addNoti({ mode: "success", message: "Added to Liked videos" });
      if (likeableType === "Video" && version === "dislike")
        addNoti({ mode: "success", message: "Removed from Liked videos" });

      return;
    }

    // create new like, if not yet liked
    changeLikeStatus(version);
    await createLike(newLike);

    if (likeableType === "Video" && version === "like")
      addNoti({ mode: "success", message: "Added to Liked videos" });
    if (likeableType === "Video" && version === "dislike")
      addNoti({ mode: "success", message: "You Dislike this video" });
  }
  ///////////////////////
  // HANDLE LIKE ENDS //
  /////////////////////

  return (
    <div className="likes">
      <div className="likes__buttons">
        <LikeButton
          likeableType={likeableType}
          numLikes={numLikes}
          loggedIn={currentUserId}
          likeStatus={likeStatus}
          handleLike={handleLike}
          currentUserId={currentUserId}
        />
        <DislikeButton
          likeableType={likeableType}
          numDislikes={numDislikes}
          loggedIn={currentUserId}
          likeStatus={likeStatus}
          handleLike={handleLike}
          currentUserId={currentUserId}
        />
      </div>

      {likeableType == "Video" && (
        <Tooltip content={`${numLikes} / ${numDislikes}`} position="top">
          <div className="likes__bar">
            <div
              ref={likesRatioRef}
              className="likes__bar likes__bar--filled"
            ></div>
          </div>
        </Tooltip>
      )}
    </div>
  );
}
export default LikeInterface;
