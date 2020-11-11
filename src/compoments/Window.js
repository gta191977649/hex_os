import React, { Component } from "react";
import Draggable from "react-draggable"; // Both at the same time
import { Rnd } from "react-rnd";

export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zIndex: 1,
    };
  }

  render() {
    const controls = <div className="hex-window-controls">
    <a href="#" onClick={this.props.onClose}>X</a>
    </div>
    return (
     
      <Rnd style={style} default={{x:this.props.x,y:this.props.y}}>
        <div className="hex-window" >
          <div className="hex-window-title">
          {this.props.control ? controls : ""}
          {this.props.title}
          </div>
          <div className="hex-window-content" style={{ textAlign: "center" }}>
            {this.props.content}
          </div>
        </div>
      </Rnd>
    );
  }
}

const style = {
  display: "flex",
  flexDirection: "column",
};