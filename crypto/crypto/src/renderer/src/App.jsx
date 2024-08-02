

import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { createChart } from 'lightweight-charts';
import 'bootstrap/dist/css/bootstrap.css';
// import Chart from './TradingViewChart';

import Navbar from './navbar'
import initOnReady from './fetch_data.jsx'
import LinearBuffer from './progress.jsx';

import ButtonUsage from "./button"
import TradingViewWidget from "./TradingViewWidget.jsx"
import axios from 'axios';

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <Navbar/>
    <TradingViewWidget/>


    {/* <initOnReady/> */}
    {/* <Navbar/>
    <LinearBuffer/>
    <br/><br/>
  
      <Api/> */}


    {/* <BitcoinChart/> */}


    {/* <ButtonUsage/> */}
    {/* <Chart/> */}
{/* 
    <div class="jumbotron">
    <h1>Bootstrap Tutorial</h1>
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,

    mobile-first projects on the web.</p>
    <p>This is some text.</p>
    <p>This is another text.</p>
    </div>  */}

    </>
    
  
//     <button class="btn btn-primary" disabled>
// <span class="spinner-grow spinner-grow-sm"></span>
// Loading..
// </button>

//   <div class="btn-group">
//     <button type="button" class="btn btn-primary">Apple</button>
//     <button type="button" class="btn btn-primary">Samsung</button>
//     <div class="btn-group">
//     <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Sony</button>
//       <ul class="dropdown-menu">
//       <li><a class="dropdown-item" href="#">Tablet</a></li>
//     <li><a class="dropdown-item" href="#">Smartphone</a></li>
//       </ul>
//     </div>
//     </div> 

      
  )
}

export default App


fetch
axios

  {/* <img alt="logo" className="logo" src={electronLogo} />

    <div className="creator">Powered by electron-vite</div>

    <div className="text">
      Build an Electron app with <span className="react">React</span>
    </div>

    <p className="tip">
      // Please try pressing <code>F12</code> to open the devTool   </p> 

     <div className="actions">
       <div className="action">
         <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
           Documentation</a>
       </div>

       <div className="action">
         <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
           Send IPC
         </a>          
      </div>  
      </div>  */}

    
    {/* // <Versions></Versions> */}