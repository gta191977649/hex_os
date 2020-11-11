import React, { Component } from 'react'
import Window from "../compoments/Window"
export default class About extends Component {
    render() {
        return (
            <Window title={this.props.title} content={
                <React.Fragment >
                   <h1>HEX OS</h1>
                  <small>Development version</small>
                  <p>Powered by: Project Sparrow 2020</p>
                  <button className="hex-buttom-secondary">OK</button>
                  <button className="hex-buttom-primary" onClick={this.props.onClose}>CLOSE</button>          
                </React.Fragment>
            }/>
        )
    }
}
