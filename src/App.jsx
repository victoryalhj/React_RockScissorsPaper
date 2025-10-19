import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './component/Box'

//1.Box 2(title,image,result)
//2.rock scissors paper button
//3.button click, button shows on the box
//4.computer random item
//5. 3 4 result, who is winner and looser
//6.border color change(winner-green/ loser-red/ = black)

function App() {

  return <div>
    <div className='main'>
      <Box title="You"/>
      <Box title="Computer"/>
    </div>
    <div className='main'>
      <button>Scissors</button>
      <button>Rock</button>
      <button>Paper</button>
    </div>
  </div>
  
}

export default App
