import "./Box.css";
import React,{useState} from "react";
const Box = (props) => {
  const [ButtonSubmit, setButtonSubmit] = useState('');
  const [data,setData] = useState(ButtonSubmit)
  //this is Function is not working
  const buttonSubmit = (event)=>{
    setButtonSubmit(event.target.value)
  }
  const ButtonHander = ()=>{
    setData(ButtonSubmit)
  }
     return (<div>
    
<span><label style={{borderColor:'red'}} className="label">Enter Your Color:{data}</label></span> 
    <input type="text"  className={`textfiled ${!props.IsValid ? 'invalid' : ''}`} onChange={buttonSubmit}></input>
    <button onClick={ButtonHander}>Button</button>
    </div>
  );
};

export default Box;
