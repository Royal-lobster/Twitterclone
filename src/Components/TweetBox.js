import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import { useState } from "react";
import db from "../Config/firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const setTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Srujan Gurram",
      username: "real_srujan",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH1Jvqtjknq6A/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=FQ3kNdRMX8NH5A2h1ZDdAWU2oE9XLPBuJXrKBp4UNyo",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH1Jvqtjknq6A/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=FQ3kNdRMX8NH5A2h1ZDdAWU2oE9XLPBuJXrKBp4UNyo" />
          <input
            value={tweetMessage}
            placeholder="What's happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          type="submit"
          onClick={setTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
