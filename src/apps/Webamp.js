import React from "react";
import Webamp from "webamp";
import { Rnd } from "react-rnd";

import song_1 from "../disk/music/粉雪 - レミオロメン.mp3"
import song_2 from "../disk/music/中山忍 - 負けないで,勇気.mp3"
import song_3 from "../disk/music/南野陽子 - 瞳のなかの未来.mp3"
import song_4 from "../disk/music/桐生一馬 - ばかみたい .mp3"
import song_5 from "../disk/music/竹内まりや - Single Again.mp3"
import song_6 from "../disk/music/島国 - 旺載山芸術団.mp3"
  

const { useState, useEffect } = React;
const config = {
  initialTracks: [
    {
      metaData: {
        artist: "粉雪",
        title: "レミオロメン",
      },
      url: song_1,
    },
    {
      metaData: {
        artist: "中山忍",
        title: "負けないで",
      },
      url: song_2,
    },
    {
      metaData: {
        artist: "南野陽子",
        title: "瞳のなかの未来",
      },
      url: song_3,
    },
    {
      metaData: {
        artist: "桐生一馬",
        title: "ばかみたい ",
      },
      url: song_4,
    },
    {
      metaData: {
        artist: "竹内まりや",
        title: "Single Again",
      },
      url: song_5,
    },
    {
      metaData: {
        artist: "島国",
        title: "旺載山芸術団",
      },
      url: song_6,
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