import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
        timestamp="This is a timestamp"
        message=" Genius, Billionaire, Playboy, Philanthropist"
        username="Tony Stark"
        image="https://imageio.forbes.com/specials-images/imageserve/5d2392b234a5c400084abe23/Film-Robert-Downey-Jr/960x0.jpg?format=jpg&width=960"
      />
      <Post
        profilePic="https://static.wikia.nocookie.net/bcfc45dd-9b15-46e9-9a1b-cd204c41baf8/smart/width/386/height/259"
        timestamp="This is a timestamp"
        message=" Mr Closure"
        username="Harvey Specter"
        image="https://i.ebayimg.com/images/g/o1sAAOSwX0hjEEi7/s-l1200.jpg"
      />
      <Post
        profilePic="https://hips.hearstapps.com/hmg-prod/images/american-actress-scarlett-johansson-at-cannes-film-festival-news-photo-1685449533.jpg?crop=0.66558xw:1xh;center,top&resize=1200:*"
        timestamp="This is a timestamp"
        message=" The black widow movie is comming out please check it out"
        username="Natasha Romanoff"
      />
    </div>
  );
}

export default Feed;
