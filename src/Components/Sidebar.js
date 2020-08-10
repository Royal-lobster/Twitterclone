import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

// importing materialui icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption active Icon={HomeOutlinedIcon} text="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
      <SidebarOption
        Icon={NotificationsNoneOutlinedIcon}
        text="Notifications"
      />
    </div>
  );
}

export default Sidebar;
