import './App.css';
import React,{useState} from 'react';
import Box from './comp/Box';
import './comp/Box.css';
import Navbar from './comp/Navbar';  

function App() {
  const [colorz,setColorz] = useState('');
  const [ButtonValue,SetbuttonValue] = useState('');
  const ChangeHandler = (event) =>{
    SetbuttonValue(event.target.value)}
  const ButtonHandler =()=>{
    setColorz(ButtonValue)
  }

  return (
    <div>
      <Navbar/>
      <h1 style={{color:`${colorz}`}} className="h1">This is Color Changing</h1>
     <div className="flex">
      <div style={{background:`${colorz}`}} className="box">
      </div>
    </div>
      <Box Handler={ChangeHandler} BtnValue={ButtonHandler}/>
    </div>
  );
}

export default App;
