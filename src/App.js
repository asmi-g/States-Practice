import logo from './logo.svg';
import './App.css';
import React from "react"


function App() {
  const [count, setCount] = React.useState(0)

  function addCount(){
      setCount(prevCount=>prevCount+1)
  }  

  function subtractCount(){
      setCount(prevCount=>prevCount-1)
  }

  return (
    <div className="counter">
        <button className="counter--minus" onClick={subtractCount}>–</button>
        <div className="counter--count">
            <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={addCount}>+</button>
    </div>
  )
}

export default App;
