import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1289583189283844096"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="_100DaysOfCode"
          options={{ height: 510 }}
        />
        <TwitterShareButton
          url={""}
          options={{
            text: "Check this out!! @real_srujan made a twitter clone...",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
