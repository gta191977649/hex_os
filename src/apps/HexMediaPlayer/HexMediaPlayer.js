import React, { Component } from 'react'
import Window from "../../compoments/Window"
import bk from "./res/bk.png"
//Controls
import play from "./res/play.png"
import pause from "./res/pause.png"
import stop from "./res/stop.png"
import "./style.css"
export default class HexMediaPlayer extends Component {
    
    render() {
        return (
            <Window enableResizing={false} x={this.props.x} y={this.props.y} title={this.props.title} control={true} onClose={this.props.onClose} content={
                <div className="hex-mediaplayer">
                    <div className="hex-menu-top">
                        <div className="hex-menu-top-content">
                            <div className="hex-menu-item">
                                <li>
                                    ファイル
                                    <div className="hex-menu-dropdown">
                                        <li>開く...</li>
                                        <li>閉じ</li>
                                        <hr/>
                                        <li onClick={()=>{this.props.onClose()}}>終了</li>
                                    </div>

                                </li>
                                <li>
                                    ヘルプ
                                    <div className="hex-menu-dropdown">
                                        <li>Meida Playerについて</li>
                                       
                                    </div>

                                </li>
                            </div>
                        </div>
                    </div>
                    <div class="hex-player-conver" style={converArea}>
                        <img width="100%" src={bk}/>
                    </div>
                    <div className="hex-player-control" style={control}>
                        <input type="range" min="1" max="100" style={{width:"98%"}}/>
                        <div class="hex-player-control-area" style={controlArea}>
                            
                            <li>
                                <img width="16px" src={play}/>
                            </li>
                            <li>
                                <img width="16px" src={pause}/>
                            </li>
                            <li>
                                <img width="16px" src={stop}/>
                            </li>
                        </div>
                        <div className="hex-status-area" style={status}>
                            初期化が完了しました
                        </div>
                    </div>
                </div>
            }/>
        )
    }
}
const status = {
    background:"black",
    color:"white",
    height:"25px",
    lineHeight:"25px",
    textAlign:"left",
    paddingLeft:"5px",
    paddingRight:"5px",
}
const converArea = {
    width:"480px",
    height:"320px",
    marginBottom: "90px",
    backgroundColor:"black",
    
}
const controlArea = {
    display:"flex",
    padding:"5px",
}
const control = {
    width:"100%",
    bottom:"0",
    position:"fixed",
    display:"flex",
    flexDirection:"column",

}
