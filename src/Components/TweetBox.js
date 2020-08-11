import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQH1Jvqtjknq6A/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=FQ3kNdRMX8NH5A2h1ZDdAWU2oE9XLPBuJXrKBp4UNyo" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
