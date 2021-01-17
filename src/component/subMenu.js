import React, { Component } from "react";

export default class SubMenu extends Component {
  render() {
    console.log("subMenu[1]", this.props.subMenu[1]);
    console.log("subMenu[2]", this.props.subMenu[2]);
    console.log("subMenu props", this.props.subMenu[0]);

    return (
      <div>
        {this.props.subMenu[1].children.map((e, index) => (
          <div key={Math.floor(Math.random() * 1000)}>
            {e.title}
            {/* {e.children.title} */}
          </div>
        ))}
      </div>
    );
  }
}
