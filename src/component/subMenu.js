import React, { Component, Fragment } from "react";

export default class SubMenu extends Component {
  render() {
    return (
      <div>
        {this.props.subMenu === 0 ? (
          <div></div>
        ) : (
          <div>
            {this.props.subMenu[1].children.map((e, index) => (
              <li key={Math.floor(Math.random() * 1000)}>{e.title}</li>
            ))}
          </div>
        )}
      </div>
    );
  }
}
