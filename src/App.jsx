 import './App.css'
 import { useState } from 'react'
const App=()=> {
  const [counter, setCounter]=useState(0)
  return (
    <>
       <div className="main">
       <button className="btn" onClick={()=>{setCounter((prevCount)=>{prevCount})}}>-</button>
       <div className="count">{counter}</div>
       <button className="btn" onClick={()=>{setCounter((prevCount)=>prevCount + 1)}}>+</button>
       </div>
       
    </>
  )
}

export default App
