import { useState } from "react"

function Home(props) {

  const increment=()=>props.increment();
  const decrement=()=>props.decrement();
  const reset=()=>props.reset();
  const input=(e)=>{
    props.input(e.target.value)
  }
  
    return (
      <>
       
       
     <div className="divos"  style={{background:props.color}}>
     
    <button  className="btn" onClick={increment}>+</button>
    <h1>{props.state}</h1>   
    <button  className="btn" onClick={decrement}>-</button>
    <button className="btn" onClick={reset}>reset</button>
    <input onChange={input} type="text"/>
     </div>
      </>
    )
  }
  
  export default Home