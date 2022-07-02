import React, { Component } from "react";
import Draggable from "react-draggable"; // Both at the same time
import { Rnd } from "react-rnd";

export default class MessageBox extends Component {
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
     
      <Rnd  dragHandleClassName="hex-window-title"  enableResizing={false} style={style} default={{x:this.props.x,y:this.props.y,width:this.props.width,height:this.props.height}}>
        <div className="hex-window" >
          <div className="hex-window-title">
            {this.props.control ? controls : ""}
            {this.props.title}
          </div>
          <div className="hex-window-content" style={contentStyle}>
            {this.props.content}
            <br/>
            <button className="hex-buttom-primary" onClick={this.props.onClose}>OK</button>
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

const contentStyle = {
    textAlign: "center",
    padding: "5px",
    width: "250px",
}