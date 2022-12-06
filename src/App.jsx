
import './App.css'
import RandomUser from './components/RandomUser'
import '../src/styles/randomUser.css'
import { useState } from 'react'

function App() {

  const [first, setfirst] = useState(false)

  const changeFunction = () => setfirst(!first)



  return (
    <div className="App">

      <button onClick={changeFunction}>reload</button>

      <RandomUser first={first}/>

    </div>
  )
}

export default App
