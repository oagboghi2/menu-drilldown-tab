import React, { Component } from "react";
import SubMenu from "./subMenu.js";

export default class Menu extends Component {
  state = { toggle: false };

  checkSubMenu = (event) => {
    console.log("event.target", event.target);
    this.setState({ toggle: !this.state.toggle });
    //console.log("toggle", this.state.toggle);
  };

  mapSubMenu = () => {
    console.log("subMenu", this.props.subMenu[0]);
    this.props.subMenu.map((m, index) => <div>{m.title}</div>);
  };

  displaySubMenu(props) {
    console.log("this.props.subMenu", this.props.subMenu);
    if (this.props.subMenu > 1) {
      return <SubMenu data={this.props.subMenu} />;
    }
    return <div>Test</div>;
  }

  // console.log("props", props.data);
  render() {
    console.log("this.props.subMenu", this.props.subMenu);
    return (
      <div>
        <li value={this.state.toggle} onClick={this.checkSubMenu}>
          {this.props.text}
          {this.state.toggle ? (
            <div>
              {this.props.subMenu !== undefined ? (
                <SubMenu subMenu={this.props.subMenu} />
              ) : (
                //<div>True Test</div>
                <SubMenu subMenu={0} />
              )}
            </div>
          ) : null}
        </li>
      </div>
    );
  }
}
