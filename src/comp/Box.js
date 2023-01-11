import "./Box.css";
// import React,{useState} from "react";
const Box = (props) => {


    return (<div>
    
<span><label className="label">Enter Your Color:</label></span> 
    <input type="text" className={'textfiled'} onChange={props.Handler}></input>
    <button onClick={props.BtnValue}>Button</button>
    </div>
  );
};

export default Box;
