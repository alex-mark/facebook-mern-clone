import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";
import axios from "../axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  const syncFeed = () => {
    axios.get("retrieve/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    syncFeed();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post._id}
          message={post.text}
          timestamp={post.timestamp}
          username={post.username}
          imgName={post.imgName}
          profilePic={post.profilePic}
        />
      ))}
    </div>
  );
}

export default Feed;
