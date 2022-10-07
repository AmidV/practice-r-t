import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const countHandler = () => {
    setCount(count + 1)
  }

  const resetHandler = () => {
    setCount(0)
  }

  return (
    <div className="App">
      {<p>Hello number {count}</p>}
      <button onClick={countHandler}>click</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  )
}

export default App
