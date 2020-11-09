import './css/os.css';
import folder from './img/icons/folder.png'
import termial from './img/icons/termial.png'
import music from './img/icons/music.png'
import pc from './img/icons/pc.png'
import internet from './img/icons/internet.png'
function App() {
  return (
    <div className="App hex-os">

      <div className="hex-menu-top">
        <div className="hex-menu-top-content">
          <div className="hex-menu-item">
            <li><b>HEX OS</b></li>
            <li><a href="#">アプリケーション</a></li>
            <li><a href="#">情報</a></li>
          </div>
          <div className="hex-menu-item item-right">
            <li>言語</li>
            <li>Sparrow</li>
            
          </div>
        </div>
      </div>
      <div className="hex-menu-bottom">
        <div className="hex-menu-bottom-content">
          <div className="hex-window-list">
            <li>ブラウザ</li>
            <li className="active">ABOUT HEX</li>
          </div>
          <div className="hex-menu-item item-right">
            <li>TIME: 03:00 AM</li>
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
    </div>
  );
}

export default App;
