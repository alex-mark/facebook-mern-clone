import React from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import "./Post.css";
import { baseURL } from "../axios";

function Post({ profilePic, imgName, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      {imgName && (
        <div className="post__image">
          <img
            src={`${baseURL}/retrieve/image/single?name=${imgName}`}
            alt=""
          />
        </div>
      )}

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
