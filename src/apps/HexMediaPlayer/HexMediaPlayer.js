import React, { Component } from 'react'
import Window from "../../compoments/Window"
import bk from "./res/bk.png"
//Controls
import play from "./res/play.png"
import pause from "./res/pause.png"
import stop from "./res/stop.png"
import "./style.css"
export default class HexMediaPlayer extends Component {
    constructor(props){
        super (props)

        this.state = {
            currentTime:0,
            duration:100,
            filename:""
        }
        this.player = React.createRef()

        this.onVieoProgress = this.onVieoProgress.bind(this)
        this.progressChange = this.progressChange.bind(this)
    }
    onControlPress(type) {
        switch(type) {
            case "play":{
                this.player.current.play()
                break;
            }
            case "pause":{
                this.player.current.pause()
                break;
            }
            case "stop":{
                this.player.current.pause()
                this.player.current.currentTime = 0
                break;
            }
        }
    }
    componentDidMount() {
        if(this.props.src) {
            let segment_array = this.props.src.split( '/' );
            let last_segment = segment_array.pop();
            this.setState({filename:last_segment})
        }
    }
    progressChange(e) {
        //console.log()
        this.player.current.currentTime = e.target.value
    }
    onVieoProgress(e) {
        this.setState({
            currentTime:e.target.currentTime,
            duration:e.target.duration,
        })
    }
    render() {
        return (
            <Window enableResizing={false} x={this.props.x} y={this.props.y} title={this.props.title} control={true} onClose={this.props.onClose} content={
                <div className="hex-mediaplayer" style={player}>
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
                        {this.props.src ? <video ref={this.player} onTimeUpdate={this.onVieoProgress} width="100%" height="100%" controls>
                            <source src={this.props.src}></source>
                            </video> : <img width="100%" src={bk}/>
                        }

                    </div>
                    <div className="hex-player-control" style={control}>
                        <input type="range" min="0" max={this.state.duration} onChange={this.progressChange} value={this.state.currentTime} style={{width:"98%"}}/>
                        <div class="hex-player-control-area" style={controlArea}>
                            
                            <li onClick={()=>{this.onControlPress("play")}}>
                                <img width="16px" src={play}/>
                            </li>
                            <li onClick={()=>{this.onControlPress("pause")}}>
                                <img width="16px" src={pause}/>
                            </li>
                            <li onClick={()=>{this.onControlPress("stop")}}>
                                <img width="16px" src={stop}/>
                            </li>
                        </div>
                        <div className="hex-status-area" style={status}>

                            {this.props.src ? this.state.filename : "初期化が完了しました"}
                        </div>
                    </div>
                </div>
            }/>
        )
    }
}
const player= {
    display:"flex",
    flexDirection: "column",
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
