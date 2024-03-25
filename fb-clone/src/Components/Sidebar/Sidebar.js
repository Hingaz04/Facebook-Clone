import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://assets-prd.ignimgs.com/2022/04/20/ironman-1650492870282.jpg"
        title="Humphrey Hinga"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title={"COVID-19 Information Center"}
      />
      <SidebarRow Icon={EmojiFlagsIcon} title={"Pages"} />
      <SidebarRow Icon={PeopleIcon} title={"Friends"} />
      <SidebarRow Icon={ChatIcon} title={"Messanger"} />
      <SidebarRow Icon={StorefrontIcon} title={"Marketplace"} />
      <SidebarRow Icon={VideoLibraryIcon} title={"Videos"} />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title={"Marketplace"} />
      <SidebarRow />
    </div>
  );
}

export default Sidebar;
