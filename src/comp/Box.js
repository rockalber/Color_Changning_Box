import "./Box.css";
import React,{useState} from "react";
const Box = (props) => {
  const [ButtonSubmit, setButtonSubmit] = useState('');
  //this is Function is not working
  const ButtonHandler = (event) =>{
    // setButtonSubmit(props.Handler);
    // console.log(ButtonSubmit);
    // console.log('working');
    setButtonSubmit(event.target.value);
  }
    return (<div>
    
<span><label style={{borderColor:'red'}} className="label">Enter Your Color:</label></span> 
    <input type="text"  className={`textfiled ${!props.IsValid ? 'invalid' : ''}`} onChange={ButtonSubmit}></input>
    <button onClick={ButtonHandler}>Button</button>
    </div>
  );
};

export default Box;
