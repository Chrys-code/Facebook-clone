import React from "react";
import "./PostStyle.scss";
import { Avatar } from "@material-ui/core";
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({ profilePic, image, userName, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar className="post_avatar" src={profilePic} />
        <div className="post_top_info">
          <h4>{userName}</h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>

      <div className="post_options">
        <div className="post_option">
          <ThumbsUpIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />

          <ExpandMoreOutlined />
          <p>Like</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
