import React from "react";
import { Sidebar, Menu} from "semantic-ui-react";
//class component for color panel
class ColorPanel extends React.Component {
  render() {
    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >

      </Sidebar>
    );
  }
}

export default ColorPanel;
