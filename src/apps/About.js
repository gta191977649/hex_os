import React, { Component } from 'react'
import Window from "../compoments/Window"
export default class About extends Component {
    render() {
        return (
            <Window enableResizing={false} x={this.props.x}  y={this.props.y} title={this.props.title} onClose={this.props.onClose} content={
                <div className="hex-os-about" style={{padding:"5px"}}>
                   <h1>HEX OS</h1>
                  <small>Development version</small>
                  <p>Powered by: Project Sparrow 2020</p>
                  <button className="hex-buttom-secondary">OK</button>
                  <button className="hex-buttom-primary" onClick={this.props.onClose}>CLOSE</button>          
                </div>
            }/>
        )
    }
}
