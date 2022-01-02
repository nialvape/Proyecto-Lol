import react, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';


function App() {

  const [logoType, setLogoType] = useState("cartel-lol"),
        [height, setHeight] = useState(window.innerHeight),
        [width, setWidth] = useState(window.innerWidth);

  const reSize=()=>{
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    if(height > width){
      setLogoType("icono-lol")
    }
    else{
      setLogoType("cartel-lol")
    }
  }

  useEffect(()=>{
    window.addEventListener("resize", reSize)
    return()=>{
      window.removeEventListener("resize", reSize)
    }
  })
  
  return (
    <div className="App" onLoad={reSize}>
      <div className="body">
        <div id="search-container" className={logoType+"-container"}>
          <img src={"/Proyecto-Lol/img/"+logoType+".png"} className={logoType} alt="League of Legends Logo"/><br/>
          <input placeholder="  Write a sumanner name" className={logoType+"-input"}></input>
          <button className={logoType+"-button"}>search</button>
        </div>
      </div>
    </div>
  );
}

export default App;