import React, { Component } from 'react'
import Window from "../compoments/Window"
import logo from "../icon/os.png"
export default class About extends Component {
    render() {
        return (
            <Window enableResizing={false} x={this.props.x}  y={this.props.y} title={this.props.title} onClose={this.props.onClose} content={
                <div className="hex-os-about" style={{padding:"5px"}}>
                   <div className="hex-os-banner" style={banner}>

                    <img width={300} src={logo}/>
                   </div>
                    <table style={about}>
                        <tr>
                            <td style={{textAlign:"left"}}><strong>Version:</strong></td>
                            <td style={{textAlign:"right"}}>Development Version</td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}><strong>Built-in Memory:</strong></td>
                            <td style={{textAlign:"right"}}>{Math.round(window.performance.memory.jsHeapSizeLimit * 0.000001)} MB</td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}><strong>Virtual Memoery:</strong></td>
                            <td style={{textAlign:"right"}}>{Math.round(window.performance.memory.usedJSHeapSize * 0.000001)} MB <small>used on HeX OS</small></td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}><strong>Total Heap Size:</strong></td>
                            <td style={{textAlign:"right"}}>{Math.round(window.performance.memory.totalJSHeapSize * 0.000001)} MB <small>allocated by Browser</small></td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"left"}}></td>
                            <td style={{textAlign:"right"}}>&copy; <a href="//buncho.moe">禾雀飛躍</a>,1997-{new Date().getFullYear()}</td>
                        </tr>
                    </table>
                  
                    <button className="hex-buttom-primary" onClick={this.props.onClose}>OK</button>
                </div>
            }/>
        )
    }
}
const about = {
    width:"100%",
}
const banner = {
    
    background:"white",
    border:"1px inset #999999",
    
}