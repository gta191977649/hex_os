import React, { Component } from 'react'

import './res/css/os.css';

//Icons
import folder from './res/img/icons/folder.png'
import termial from './res/img/icons/termial.png'
import music from './res/img/icons/music.png'
import pc from './res/img/icons/pc.png'
import internet from './res/img/icons/internet.png'
import kctv from './res/img/icons/kctv.png'

//Tray Tools
import DateTime from "./widgets/DateTime"

//Apps
import About from "./apps/About"
import Webamp from "./apps/Webamp"
import Browser from "./apps/Browser"
import HexMediaPlayer from "./apps/HexMediaPlayer/HexMediaPlayer"
import Konsole from "./apps/Konsole/Konsole"

//Compoments
import MessageBox from "./compoments/MessageBox"
import BootSplash from "./BootSplash"
//test mv
import mv from "./disk/video/✩  恋をしよう   LIP×LIP  歌ってみた　 ver.かぴ.1080p.mp4"
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      process : [],
      mouse_x: 0,
      mouse_y: 0,
      easter_egg: 0,
      loaded: false,
    }
    this.openApp = this.openApp.bind(this)
    this.closeApp = this.closeApp.bind(this)
  }
  componentDidMount() {
   // this.openApp("ABOUT")
   //this.openApp("Konsole")
   
    setTimeout(()=>{
      this.setState({loaded:true})
    },5000)
    document.addEventListener('mousemove', (e) => {
        this.setState({mouse_x: e.pageX, mouse_y: e.pageY});
    });
  }
  openApp(name,param = null) {
    let process = this.state.process
    let pid = process.length
    switch(name) {
      case "UNKNOWN": {
        process.push({
          "title":"Message Box",
          "pid":pid,
          "pointer": <MessageBox title="実装されていないの機能" content="この機能は現在開発中です。" x={this.state.mouse_x} y={this.state.mouse_y} onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break
      }
      case "ABOUT":{
        process.push({
          "title":"About Gossypium OS",
          "pid":pid,
          "pointer": <About x={this.state.mouse_x} y={this.state.mouse_y} title="This PC" onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break
      }
      case "MUSIC":{
        process.push({
          "title":"WEBAMP",
          "pid":pid,
          "pointer": <Webamp x={this.state.mouse_x} y={this.state.mouse_y} onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break
      }
      case "BBS":{
        process.push({
          "title":"Browser",
          "pid":pid,
          "pointer": <Browser url="https://blog.sparrow.moe"  x={this.state.mouse_x} y={this.state.mouse_y} title="HeX Internet Explorer" onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break
      }
      case "MIDI":{
        process.push({
          "title":"Browser",
          "pid":pid,
          "pointer": <Browser url="https://music.sparrow.moe/"  x={this.state.mouse_x} y={this.state.mouse_y} title="HeX Internet Explorer" onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break
      }
      case "HANA":{
        process.push({
          "title":"Browser",
          "pid":pid,
          "pointer": <Browser url="https://archive.sparrow.moe/hana/"  x={this.state.mouse_x} y={this.state.mouse_y} title="HeX Internet Explorer" onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break
      }
      case "MediaPlayer":{
        process.push({
          "title":"HeX Media Player",
          "pid":pid,
          "pointer": <HexMediaPlayer src={param} x={this.state.mouse_x} y={this.state.mouse_y} title="HeX Media Player" onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break;
      }
      case "Konsole":{
        process.push({
          "title":"Konsole",
          "pid":pid,
          "pointer": <Konsole src={param} x={this.state.mouse_x} y={this.state.mouse_y} title="Konsole" onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break;
      }
      default:{

      }
    }
    //console.log(this.state.process)
  }
  closeApp(pid) {
    let process = [...this.state.process]
    for(let i = 0; i < process.length; i++) {
      console.log(`pid ${process[i].pid}`)
      if(process[i].pid === pid) {
        process.splice(i, 1)
        this.setState({process:process})
        console.log(`PID ${pid} killed`)
        return
      }
    }
    console.log(`PID ${pid} not found`)
  }
  renderOS() {
    return(
      <div className="App hex-os">
  
        <div className="hex-menu-top">
          <div className="hex-menu-top-content">
            <div className="hex-menu-item">
              <li className="start">
                <b>Nurupo</b>
                <div className="hex-menu-dropdown">
                  <li onClick={()=>{this.openApp("ABOUT")}}>について</li>
                  <hr/>
                  <li onClick={()=>{this.openApp("UNKNOWN")}}>システム設置</li>
                </div>
              </li>
              <li>
                アプリ
                <div className="hex-menu-dropdown">
                  <li onClick={()=>{this.openApp("BBS")}}>HeX Internet Explorer</li>
                  <li onClick={()=>{this.openApp("MediaPlayer")}}>Hex Media Player</li>
                  <li onClick={()=>{this.openApp("Konsole")}}>Konsole</li>
                  <li onClick={()=>{this.openApp("MUSIC")}}>Winamp</li>
                </div>
              </li>
              
           
            </div>
            <div className="hex-menu-item item-right">
            <li>言語
              <div className="hex-menu-dropdown">
                  <li>日本語</li>
                  <li>中文</li>
                </div>
            </li>
            <li><DateTime/></li>
              <li>Sparrow</li>
              
            </div>
          </div>
        </div>
        <div className="hex-menu-bottom">
          <div className="hex-menu-bottom-content">
            <div className="hex-window-list">
              {this.state.process.map((process,pid)=>{
                return <li key={pid}>{process.title}</li>
              })}
            </div>
            <div className="hex-menu-item item-right">
              <li>NAN</li>
            </div>
          </div>
        </div>
        <div className="hex-gird">
          <li>
            <img src={pc} alt=""/>
            <p>This PC</p>
          </li>
          <li onDoubleClick={()=>{this.openApp("BBS")}}>
            <img src={internet} alt=""/>
            <p>Blog</p>
          </li>
          <li onDoubleClick={()=>{this.openApp("MUSIC")}}>
            <img src={music} alt=""/>
            <p>Music</p>
          </li>
          <li onDoubleClick={()=>{this.openApp("MIDI")}}>
            <img src={folder} alt=""/>
            <p>MIDI</p>
          </li>
          <li onDoubleClick={()=>{this.openApp("Konsole")}}>
            <img src={termial} alt=""/>
            <p>Konsole</p>
          </li>
          <li onDoubleClick={()=>{this.openApp("MediaPlayer",mv)}}>
            <img src={termial} alt=""/>
            <p>test-video.sh</p>
          </li>
          <li onDoubleClick={()=>{
            this.openApp("ABOUT")
          }}>
            <img src={kctv} alt=""/>
            <p>
              {this.state.easter_egg >=3 ? "HANA :)": "HEX OS"}
            </p>
          </li>
        </div>
        <div className="hex-desktop-version">
          Gossypium OS #Alpha
          <br/>
          Kernel Build Ver: 9886<br/>
          Okamei Project 2023
        </div>
        {
          this.state.process.map((app,pid)=>{
            return app["pointer"]
          })
        }
      </div>
    )
  }
  renderLoading() {
    return(
      <BootSplash/>
    )
  }
  render() {
    return(
      <React.Fragment>
        {this.state.loaded ? this.renderOS() : this.renderLoading()}
      </React.Fragment>
    )
  }
}
