
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';

import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {

  const [mode,setmode] = useState('light')
  const [alert,setalert] = useState(null)
  const [textColor,settextColor] = useState('black')
  const [backgroundColor,setbackgroundColor] = useState({'page':'white','navback':'light','btns':'primary'})

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const togglemode = (event)=>{
    console.log("value", event.target.value)
    
    if (event.target.value==='Green' && mode!=='green'){
      if (mode!=='light'){
        showalert(`${mode} is on, Please disable it first`,`danger`)
        return;  
      }
      setmode('green')
      // showalert("Green mode has been enabled","success")
      settextColor('white')
      setbackgroundColor({page:'#1fa01f',navback:'success',btns:'success'})
      document.body.style.backgroundColor = '#1fa01f'
    }else if (event.target.value==='Green' && mode==='green'){
      document.body.style.backgroundColor = 'white'
      setmode('light')
      settextColor('black')
      setbackgroundColor({page:'white',navback:'light',btns:'primary'})
      showalert("Green mode has been disabled","warning")

    }
    if (event.target.value==='Yellow' && mode!=='yellow'){
      document.body.style.backgroundColor = 'yellow'
      setmode('yellow')
      settextColor('black')
      setbackgroundColor({page:'yellow',navback:'warning',btns:'warning'})
      showalert("Yellow mode has been enabled","success")
    }else if (event.target.value==='Yellow' && mode==='yellow'){
      document.body.style.backgroundColor = 'white'
      setmode('light')
      settextColor('black')
      setbackgroundColor({page:'white',navback:'light',btns:'primary'})
      showalert("Yellow mode has been disabled","warning")
    }
    if (event.target.value==='Purple' && mode!=='purple'){
      document.body.style.backgroundColor = 'purple'
      setmode('purple')
      settextColor('white')
      setbackgroundColor({page:'purple',navback:'dark',btns:'dark'})
      showalert("Purple mode has been enabled","success")
    }else if (event.target.value==='Purple' && mode==='purple'){
      document.body.style.backgroundColor = 'white'
      setmode('light')
      settextColor('black')
      setbackgroundColor({page:'white',navback:'light',btns:'primary'})
      showalert("Purple mode has been disabled","warning")
    }
    if (event.target.value==='Dark' && mode!=='dark'){
      document.body.style.backgroundColor = '#020747'
      setmode('dark')
      settextColor('white')
      setbackgroundColor( {page:'#020747',navback:'dark',btns:'primary'})
      showalert("Dark mode has been enabled","success")
    }else if (event.target.value==='Dark' && mode==='dark'){
      document.body.style.backgroundColor = 'white'
      setmode('light')
      settextColor('black')
      setbackgroundColor({page:'white',navback:'light',btns:'primary'})
      showalert("Dark mode has been disabled","warning")
    }
    // if (mode === 'light'){
    //   console.log("Dark mode enabled", mode)
    //   setmode('dark')
    //   document.body.style.backgroundColor = '#020747'
    //   showalert("Dark mode has been enabled","success")
    // }
    // else{
    //   setmode('light')
    //   document.body.style.backgroundColor = 'white'
    //   showalert("Dark mode has been disabled","warning")
    // }
  }
  return (
 
    <Router>
    <Navbar title="Text Utils"  backgroundColor={backgroundColor} textColor={textColor} mode = {mode} togglemode={togglemode}  aboutText="About"/>
    <Alerts alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/About"  element={<About />} />
          <Route exact path="/" element={<Textfrom heading="Enter your text" backgroundColor={backgroundColor} textColor={textColor} showalert={showalert} mode={mode} />} />
        </Routes>
    </div>
      </Router>

  );
}

export default App;
