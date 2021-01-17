import React, { Component } from "react";
import Menu from "./component/menu.js";
import { render } from "react-dom";
import "./styles.css";

const tree = [
  { title: "Trunk Stuff" },
  {
    title: "More Trunk Stuff",
    children: [
      { title: "Branch Stuff" },
      {
        title: "More Branch Stuff",
        children: [{ title: "Twig Stuff" }, { title: "Another Twig" }]
      },
      { title: "Child Things" }
    ]
  },
  { title: "Other Trunk Things" }
];

export default class App extends Component {
  state = [
    { title: "Trunk Stuff" },
    {
      title: "More Trunk Stuff",
      children: [
        { title: "Branch Stuff" },
        {
          title: "More Branch Stuff",
          children: [{ title: "Twig Stuff" }, { title: "Another Twig" }]
        },
        { title: "Child Things" }
      ]
    },
    { title: "Other Trunk Things" }
  ];

  handleClick = (state, i) => {
    console.log("state", Object.keys(this.state[0]));
    var data = this.state;
    console.log("data", data);
    if (data[0].length <= 1) {
      alert("tested 1");
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.map((e, index) => (
          <Menu
            key={Math.floor(Math.random() * 1000)}
            id={index}
            text={this.state[index].title}
            subMenu={this.state[index].children}
            data={this.state}
            trigger={this.handleClick}
          />
        ))}
      </div>
    );
  }
}
