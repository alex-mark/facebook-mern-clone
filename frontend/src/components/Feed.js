import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import axios from "../axios";

const pusher = new Pusher("e79c20efcb6725fbac42", {
  cluster: "eu",
});

function Feed() {
  const [posts, setPosts] = useState([]);

  const syncFeed = () => {
    axios.get("retrieve/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    const channel = pusher.subscribe("posts");
    channel.bind("inserted", (data) => {
      syncFeed();
    });
  }, []);

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
          username={post.user}
          imgName={post.imgName}
          profilePic={post.avatar}
        />
      ))}
    </div>
  );
}

export default Feed;
