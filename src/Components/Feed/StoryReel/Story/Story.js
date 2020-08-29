import React from "react";
import "./StoryStyle.scss";
import { Avatar } from "@material-ui/core";

function Story({ image, userImg, title }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
      className="story"
    >
      <Avatar className="story_avatar" src={userImg} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
