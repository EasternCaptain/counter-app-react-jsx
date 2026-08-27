import { useState } from 'react'; 

export default function CounterApp() {
  const [ count, setCount ] = useState(0); 

  const increment = () => {
    setCount(prev => prev + 1) 
  }
  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1) 
    }
  }
  const reset = () => {
    setCount(0)
  }
  return <div className="container">
    <h1 className="heading">COUNTER APP</h1>
    <p className="display-result">{`Count is ${count}`}</p>
    <button className="button decrement" onClick={decrement}>-</button><button className="button increment" onClick={increment}>+</button>
    <button type="reset" className="reset-button" onClick={reset}>RESET</button>
  </div>
}