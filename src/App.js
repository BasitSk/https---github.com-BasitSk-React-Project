//import logo from './logo.svg';
//import './App.css';
import { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(0);
  const inc = () => setCounter(counter + 1);
  const dec = () => setCounter(counter - 1);
  return (
    <div>
      <div>{counter}</div>
      <input type="button" value="inc" onClick={inc} />
      <input type="button" value="dec" onClick={dec} />
    </div>
  );
}
