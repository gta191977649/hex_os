import React from "react";
import Webamp from "webamp";
import { Rnd } from "react-rnd";

import song_1 from "../disk/music/攻撃戦だ HQ.mp3"
import song_2 from "../disk/music/統一列車は走る.mp3"
import song_3 from "../disk/music/병사의 일기　A soldiers diary.mp3"
import song_4 from "../disk/music/社会主義前進歌 (사회주의전진가).mp3"
import song_5 from "../disk/music/そのように私たちが住んでいる - 그때처럼 우리가 살고있는가 (KCTV버전).mp3"
import song_6 from "../disk/music/一気に(단숨에).mp3"
import song_7 from "../disk/music/そのように私たちが住んでいる (그때처럼 우리가 살고있는가).mp3"
import song_8 from "../disk/music/北朝鮮 我々は万里馬騎手 (우리는 만리마기수) KCTV 20191110 日本語字幕付き.mp3"


const { useState, useEffect } = React;
const config = {
  // Optional.
  initialTracks: [
    {
      metaData: {
        artist: "攻撃戦だ - 공격전이다",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_1,
    },
    {
      metaData: {
        artist: "統一列車は走る",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_2,
    },
    {
      metaData: {
        artist: "兵士の日記",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_3,
    },
    {
      metaData: {
        artist: "社会主義前進歌 (사회주의전진가)",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_4,
    },
    {
      metaData: {
        artist: "そのように私たちが住んでいる - 그때처럼 우리가 살고있는가 (KCTV버전)",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_5,
    },
    
    {
      metaData: {
        artist: "一気に(단숨에)",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_6,
    },
    {
      metaData: {
        artist: "そのように私たちが住んでいる",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_7,
    },
    {
      metaData: {
        artist: "北朝鮮 我々は万里馬騎手 (우리는 만리마기수)",
        title: "Pochonbo Electronic Ensemble",
      },
      // Can be downloaded from: https://github.com/captbaritone/webamp/raw/master/mp3/llama-2.91.mp3
      url: song_8,
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