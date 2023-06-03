import React, { Component } from 'react'
import Window from "../../compoments/Window"
import Terminal from 'react-console-emulator'
import "./style.css"
const commands = {
    
    echo: {
        description: 'Echo your inputs string',
        usage: 'echo <string>',
        fn: function () {
            return `${Array.from(arguments).join(' ')}`
        }
    },
    sites:{
        description: 'My Website',
        usage: 'sites',
        fn: function () {
          return <React.Fragment>
                <p>List Of Sites:<br/><strong>My personal sites:</strong><br/>
                <a href="//buncho.moe">Sparrow Blog (My blog)</a><br/>
                <a href="//midi.sparrow.moe">Sparrow MIDI (My MIDI Collection)</a>
            </p>
        </React.Fragment>
        }
    },
    projects:{
        description: 'My Projects (Some of them are built for my own interests)',
        usage: 'projects',
        fn: function () {
            return  <React.Fragment><h2>List Of Projects:</h2><h3>Github:</h3>
                <a href="//github.com/gta191977649" target="_blank">ヌルポ(Nurupo)</a>
                <p> link will take your to my github if you interested =w=</p>
                <h3>My projects</h3>
                <h3>Personal:</h3>
                <a href="//sparrow.moe" target="_blank">HEX OS (The one you are currently using :p</a><br/>
                <a href="//archive.sparrow.moe/tools/utsgpacalc/" target="_blank">UTA GPA Calculator</a><br/>
                <a href="//archive.sparrow.moe/mytimetable-w-/" target="_blank">MyTimetable -w- (Android,IOS) APP,i guess better than UTS Offcial =w=</a>
                <h3>UTS Assignments (Archive):</h3>
                <a href="//sep.sparrow.moe" target="_blank">SEP DEMO (Software Engineering Practice Spring 2017)</a><br/>
                <a href="//sdp.sparrow.moe" target="_blank">SDP DEMO (Systems Development Project Spring 2017) </a><br/>
                <a href="//wsd.sparrow.moe" target="_blank">WSD Group Assignment 2018 (Web Services Development Autumn 2018) </a>
            </React.Fragment>
        }
    }
   
  }
export default class Konsole extends Component {
    render() {
        return (
            <Window width={720} height={450} enableResizing={true} x={this.props.x} y={this.props.y} title={this.props.title} control={true} onClose={this.props.onClose} content={
                <Terminal
                    className="hex-konsole"
                    commands={commands}
                    welcomeMessage={`Gossypium OS [Version 0.1.502]\n(c) 1997-${new Date().getFullYear()} 禾雀飛躍 著作権所有。\n输入「help」显示全部可用指令。`}
                    promptLabel={'nurupo@MHY:~$'}
                    noAutoScroll={false}
                    style={{height:"100%",textAlign:"left",borderRadius:"0px",backgroundColor:"black"}}
                />
            }/>
        )
    }
}