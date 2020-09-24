import React from "react";
import { Menu } from "semantic-ui-react";

import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";
//side panel class component
class SidePanel extends React.Component {
  render() {
    const { currentUser } = this.props;
      //menu
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "purple", fontSize: "1.2rem" }}
      >
        <UserPanel currentUser={currentUser} />
        <Starred currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
