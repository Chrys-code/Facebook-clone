import React, { useState, useEffect } from "react";
import "./FeedStyle.scss";
import StoryReel from "./StoryReel/StoryReel";
import PostingUI from "./PostingUI/PostingUI";
import Post from "./Post/Post";
import db from "../../Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <PostingUI />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          userName={post.data.username}
          timestamp={post.data.timestamp}
          message={post.data.message}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
