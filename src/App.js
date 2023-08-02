import { useState } from "react";
import "./App.css";
import Buttun from "./Componets/Buttun";
import Input from "./Componets/UI/Input";
import { styled } from "styled-components";

const App = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [arr, setArr] = useState([]);

  // console.log(name);
  // console.log(state);
  console.log(arr);

  const setValuee = (el) => {
    setState(el.target.value);
  };
  
  const nameValue = (el) => {
    setName(el.target.value);
  };

  const clickHandler = () => {
   
    const obj = {
      name: name,
      state: state,
      id: Math.random(),
    };
    
    console.log(obj);
    setArr((arr) => [...arr, obj]);
    setState('')
    setName('')
  };

  return (
    <DivStayle className="App">
      {arr.map((el) => {
        return (
          <div>
            <h1 key={el.id}>{el.name}</h1>
            <h1 key={el.id}>{el.state}</h1>
          </div>
        );
      })}
      <Buttun onClick={clickHandler}/>
      <br />
      <Input value={name} onСhange={nameValue}/>
      <br />
      <Input value={state}  onСhange={setValuee}/>
    </DivStayle>
  );
};

export default App;



const DivStayle = styled.div`
 border: 2px solid red;
 display: flex;
 align-items: center;
 flex-direction: column;
 background-color:gold;


`