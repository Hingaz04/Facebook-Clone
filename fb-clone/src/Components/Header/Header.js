import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://logowik.com/content/uploads/images/facebook-new-2023-icon9594.logowik.com.webp"
          alt=""
        />
        <div className="header-input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header-center">
        <div className="header-option header-option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h4>Humphrey Hinga</h4>
        </div>
        <IconButton />
        <AddIcon />
        <IconButton />
        <IconButton />
        <ForumIcon />
        <IconButton />
        <IconButton />
        <NotificationsActiveIcon />
        <IconButton />
        <IconButton />
        <ExpandMoreIcon />
        <IconButton />
      </div>
    </div>
  );
}

export default Header;
