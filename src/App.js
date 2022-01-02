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
    if(width < 530){
      setLogoType("icono-lol");
      console.log("la pantalla cambio de tamanio a ",logoType);
    }
    else{
      setLogoType("cartel-lol")
    }
  }

  const seRotoLaPantalla = ()=> {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    if(height < 530){
      setLogoType("icono-lol");
      console.log("se roto la pantalla");
    }
    else{
      setLogoType("cartel-lol");
      console.log("se roto la pantalla");
    }
  }
  useEffect(()=>{
    window.addEventListener("resize", reSize);
    window.addEventListener("orientationchange", seRotoLaPantalla);
    return()=>{
      window.removeEventListener("resize", reSize);
      window.removeEventListener("orientationchange", seRotoLaPantalla);
    }
  })
  
  return (
    <div className="App" onLoad={reSize}>
      <div className="body">
        <div id="search-container" className={logoType+"-container"}>
          <img src={"/Proyecto-Lol/img/"+logoType+".png"} className={logoType} alt="League of Legends Logo"/><br/>
          <input placeholder="  Write a summoner name" className={logoType+"-input"}></input>
          <button className={logoType+"-button"}>search</button>
        </div>
      </div>
    </div>
  );
}

export default App;