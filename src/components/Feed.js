import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        message="Hey, it works"
        timestamp="the timestamp"
        username="alexmark_in"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
      <Post
        message="Hey, it works"
        timestamp="the timestamp"
        username="alexmark_in"
      />
    </div>
  );
}

export default Feed;
