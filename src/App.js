import {useState} from 'react';
import Button from '@mui/material/Button';
import Header from './components/Header';
import CustomSelect from './Select';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OnlineMode from './components/OnlineMode';
import CardA from './components/CardA';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import CardB from './components/CardB';
import CardC from './components/CardC';
import './App.css';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  
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
    component={PinkSwitch} />

      <CardB
      title="Master Volume"
      body="Overrides all other sound settings in the application" />
      
      <CardC
      title="Sound Quality"
      body="Manually control the music quality in event of poor connection" />
    </section>

    <section className="system">
      System Notifications:
    </section>
    </>
    ):(
       <Login handleClick={setIsLoggedIn} />
       )}
  </div>
  );
}

export default App;
