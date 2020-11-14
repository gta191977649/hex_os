import React, { Component } from 'react'
import Iframe from 'react-iframe'
import Window from "../compoments/Window"

export default class componentName extends Component {
    constructor(props) {
        super (props)
        this.state = {
            url : null,
            inputs: null
        }
        this.onUrlEnter = this.onUrlEnter.bind(this)
    }
    componentDidMount(){
        this.setState({url:this.props.url,inputs:this.props.url})
    }
    onUrlEnter(url) {
        this.setState({inputs:url})
    }
    render() {
    return (
        <Window width={1224} height={720} enableResizing={true} x={this.props.x} y={this.props.y} title={this.props.title} control={true} onClose={this.props.onClose} content={
            <div className="hex-browser" style={hex_browser}>
               <div className="hex-browser-toolbar" style={hex_toolbar}>
                <input onChange={(e)=>{this.onUrlEnter(e.target.value)}} style={{width:"100%"}} value={this.state.inputs} type="text"/>
                <button onClick={()=>{this.setState({url:this.state.inputs})}}>GO</button>
               </div>
               <Iframe url={this.state.url}
                width="100%"
                height="100%"
                id="myId"
                className="browser"
               />
           </div>
        }/>
    )
  }
}

const hex_browser = {
    height:"98%",
    display:"flex",
    flexDirection:"column",
    padding:"5px",
}

const hex_toolbar = {
    display: "flex",
    width:"100%",
    marginBottom:"3px",
}