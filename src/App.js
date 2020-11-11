import React, { Component } from 'react'

import './res/css/os.css';
import folder from './res/img/icons/folder.png'
import termial from './res/img/icons/termial.png'
import music from './res/img/icons/music.png'
import pc from './res/img/icons/pc.png'
import internet from './res/img/icons/internet.png'

import DateTime from "./widgets/DateTime"

//Apps
import About from "./apps/About"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      process : []
    }
    this.openApp = this.openApp.bind(this)
    this.closeApp = this.closeApp.bind(this)
  }
  componentDidMount() {
   // this.openApp("ABOUT")
  }
  openApp(name) {
    switch(name) {
      case "ABOUT":{
        let process = this.state.process
        let pid = process.length
        process.push({
          "title":"About HEX OS",
          "pid":pid,
          "pointer": <About title="This PC" onClose={()=>{this.closeApp(pid)}} key={pid}/>
        })
        this.setState({process:process})
        break
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
  render() {
    return (
      <div className="App hex-os">
  
        <div className="hex-menu-top">
          <div className="hex-menu-top-content">
            <div className="hex-menu-item">
              <li className="start">
                <b>HEX OS</b>
                <div className="hex-menu-dropdown">
                  <li onClick={()=>{this.openApp("ABOUT")}}>このHEXについて</li>
                  <hr/>
                  <li>システム設置</li>
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
          <li>
            <img src={internet} alt=""/>
            <p>Blog</p>
          </li>
          <li>
            <img src={music} alt=""/>
            <p>Music</p>
          </li>
          <li>
            <img src={folder} alt=""/>
            <p>MIDI</p>
          </li>
          <li>
            <img src={termial} alt=""/>
            <p>Termial</p>
          </li>
        </div>
        <div className="hex-desktop-version">
          HEX OS (Alpha)
          <br/>
          Build: 502<br/>
          Powered by: Project Sparrow 2020
        </div>
        {
          this.state.process.map((app,pid)=>{
            return app["pointer"]
          })
        }
      </div>
    );
  }
}
