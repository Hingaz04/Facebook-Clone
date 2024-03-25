import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setImageURL("");
  };
  return (
    <div className="message-sender">
      <div className="message-sender-top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="message-sender-input"
            placeholder="What's on your mind?"
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="message-sender-input"
            placeholder="image URL (Optinal)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="message-sender-bottom">
        <div className="message-sender-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message-sender-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message-sender-option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/ Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
