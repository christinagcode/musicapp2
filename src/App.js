import { useState, useEffect } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CardA from "./components/CardA";
import Switch from "./components/Switch";
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import "./App.css";
import Slider from "./components/Slider";
import Select from "./components/Select";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [online, setOnline] = useState(true);
  const [volume, setVolume] = useState(30);

  const [quality, setQuality] = useState(2);

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  useEffect(() => {
    console.log(volume, "this is a string");
  }, [volume]);

  return (
    <div className="App">
      <Header />
      {isLoggedIn == true ? (
        <>
          <Dashboard />

          <section className="cards">
            <CardA 
    title="Online Mode"
    body="Is this application connected to the internet?" 
    component={Switch}
    state = {online}
    setState = {setOnline}
     />

            <CardA
              title="Master Volume"
              body="Overrides all other sound settings in the application"
              component={Slider}
              state={volume}
              setState={setVolume}
            />

                  
      <CardA
      title="Sound Quality"
      body="Manually control the music quality in event of poor connection"
      component = {Select}
      state = {quality}
      setState = {setQuality}/>
          </section>

          <section className="system">
            System Notifications:

            {!online ? <div> Your application is offline. You won't be able to share or
                stream music to other devices.</div>:<div></div>}

            {volume >= 80 ? (
              <div>
               Listening to music at a high volume could cause long-term hearing loss.
              </div>
            ) : (
              <div></div>
            )}

            {quality === 1? <div>Music quality is degraded. Increase quality if your connection allows it.</div>:<div></div>}
          </section>
        </>
      ) : (
        <Login handleClick={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
