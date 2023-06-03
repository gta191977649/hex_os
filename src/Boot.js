import React, {useState,useEffect,useRef} from 'react'
import {Link } from "react-router-dom";
import Logo from "./res/img/energy_star.jpeg"
import axios from 'axios'
import SFX_BEEP from "./res/beep.mp3"
import HexOS from "./Hex"

function BootInit(func) {
  const [ip,setIP] = useState('0.0.0.0')
  const [loc,setLoc] = useState('UNKNOWN')
  const [list,setList] = useState([])
  const [idx,setListAppendIndex] = useState(0)
  const [boot_count,setBootCount] = useState(5)

  const SFX = new Audio(SFX_BEEP)
  const BOOT_LIST = [
    ["CPU","OMAP 3430 ARM Cortex-A8"],
    ["RAM","256MB (OK)"],
    ["NETWORK","Realtek PCIe FE"],
    ["IP",ip],
    ["GEO",loc],
  ]

  const getData = async() => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
    setLoc(`${res.data.city},${res.data.state},${res.data.country_name}`)
  }

  const renderList = list.map((item,idx) =>
    <tr key={idx}>
      <td>{item[0]}:</td>
      <td>{item[1]}</td>
    </tr>
  );

  const checkSkip = (e) => {
    console.log(e.key)
    if(e.key == "Enter") {
      func.onComplete(func.stage)
      document.removeEventListener("keydown",checkSkip)
    }
  }


  const init = () => {
    getData()
    
  }
  useEffect(()=>{
    init()
  },[])

  useEffect(()=>{
    console.log(idx)
    if (idx < BOOT_LIST.length) {
      let timer = setInterval(()=>{
        //append list
        setList(list =>[...list,BOOT_LIST[idx]])
        setListAppendIndex(idx=>idx+1)
      },300)
      return () => { 
        clearInterval(timer) 
      }
    } else {
      console.log("DONE")
      SFX.play()
      //setTimeout(()=>{func.onComplete(func.stage)},1500)
      setBootCount(5)
      //attch skip check
      document.addEventListener("keydown", checkSkip, false);
    }
  },[idx])

  useEffect(()=>{
    if(boot_count >0) {
      let timer = setInterval(()=>{setBootCount(boot_count=>boot_count-1)},1000)
      return () => { 
        clearInterval(timer) 
      }
    }else{
      func.onComplete(func.stage)
    }

  },[boot_count])

  
  return(
    <div style={{color:"white"}} className="boot-loader">
      <div className='bios-header'>
        <img className='bios-logo' src={Logo} width="200px"/>
        <p>Hex Bootloader v2.07<br/>Copyright (C) 1997-{new Date().getFullYear()}, Project Null, Inc</p>
      </div>
      <div className="bios-content">
       
          <p>OMAP 3430 ARM Cortex-A8 @600 MHz</p>
          <br/>
          <table className='bios-list'>
            <tbody>
            {renderList}
            </tbody>
          </table>
          <br/>
          <p>{ idx == BOOT_LIST.length ? "Initialization Finished ..." :""}</p>
          <p className='bottom-text'>{ idx == BOOT_LIST.length ? `Press ENTER or wait ${boot_count} seconds to BOOT ...` :""}</p>
      </div>
    </div>
  )
}

function BootMenu() {

  return (
    <div style={{color:"white"}} className="boot-loader">
      <div className="bios-content">
        <br/>
        <p>Please select the operating system to start.</p>
        <br/>
        <div className='os-list'>
          <li><Link to="/os">NullSoft Hex OS #Development Version</Link></li>
          <li><Link to="/testcard">Testcard</Link></li>
        </div>
        <p className='bottom-text'>Use the UP and DOWN arrow to move the hightlight to your choice.
          <br/>
        Press ENTER to choice.
        </p>
      </div>
    </div>
  )
}

export default function Boot() {
  
  
  const onStageCompleted = (func) => {
    switch(func) {
      case "INIT": {
        setRender(BOOT_SEQUENCE[1])
        break;
      }
    }
  }

  const BOOT_SEQUENCE = [
    <BootInit onComplete={onStageCompleted} stage="INIT"/>,
    <BootMenu onComplete={onStageCompleted} stage="OS-SELECT"/>,
  ]


  const [render,setRender] = useState(BOOT_SEQUENCE[0])


  return (
    <React.Fragment>
      {render}
    </React.Fragment>
  )
}

