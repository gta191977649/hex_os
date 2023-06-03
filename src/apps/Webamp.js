import React from "react";
import Webamp from "webamp";
import { Rnd } from "react-rnd";

import song_1 from "../disk/music/サヨナラの意味 - オーケストラ アレンジ.mp3"
import song_2 from "../disk/music/Belle Canon BBC2.mp3"
  

const { useState, useEffect } = React;
const config = {
  initialTracks: [
    {
      metaData: {
        artist: "乃木坂46",
        title: "サヨナラの意味",
      },
      url: song_1,
    },
    {
      metaData: {
        artist: "BBC Music Archive",
        title: "Belle Canon",
      },
      url: song_2,
    },
  ],
};

function MyComponent(props) {
  console.log(`pro ${props.x}`)
  const [divRef, setDivRef] = useState(null);

  useEffect(() => {
    if (divRef == null) {
      return;
    }
    const webamp = new Webamp(config);
    webamp.renderWhenReady(divRef);
    webamp.play()
    webamp.onClose(() => {
      console.log("Webamp closed");
      props.onClose()
    });

    return () => {
      webamp.dispose();
    };

    

  }, [divRef]);

  // Check if Winamp is supported in this browser
  if (!Webamp.browserIsSupported()) {
    return <div>Not supported</div>;
  }
 
  return <div style={{width:"270px",height:"350px",top:props.x,left:props.y,position:"absolute"}} ref={setDivRef}/>;
}

export default MyComponent;