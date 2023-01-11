import './App.css';
import React,{useState} from 'react';
import Box from './comp/Box';
import './comp/Box.css';
import Navbar from './comp/Navbar';  

function App() {
  const [colorz,setColorz] = useState('')
  const [isValid,SetisValid] = useState(true);
  const ChangeHandler = (event) =>{
    if(event.target.value.trim().length===0){
      SetisValid(false);
    }
      setColorz(event.target.value)
  }
  return (
    <div>
      <Navbar/>
      <h1 style={{color:`${colorz}`}} className="h1">This is Color Changing</h1>
     <div className="flex">
      <div style={{background:`${colorz}`}} className="box">
      </div>
    </div>
      <Box Handler={ChangeHandler} IsValid={isValid}/>
    </div>
  );
}

export default App;
