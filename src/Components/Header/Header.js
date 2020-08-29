import React from "react";
import "./HeaderStyle.scss";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NoificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png"
        />
        <div className="search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_middle_options">
          <div className="header_middle_option header_middle_option--active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header_middle_option">
            <FlagIcon fontSize="large" />
          </div>

          <div className="header_middle_option">
            <SubscriptionsIcon fontSize="large" />
          </div>

          <div className="header_middle_option">
            <StorefrontIcon fontSize="large" />
          </div>

          <div className="header_middle_option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="header_right">
        <div className="header_right_userinfo">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NoificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
