import React from 'react'
import OS_LOGO from './icon/os.png'
export default function BootSplash() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",background:"white"}}>
      <img src={OS_LOGO} width={600}/>
      <p style={{fontSize:30}}>STARTING UP ...</p>
    </div>
  )
}
