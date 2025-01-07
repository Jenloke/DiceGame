import { useState } from 'react'
import Dice from './Dice'

import { randDice } from './utils/random'

function App() {
  const [score, setScore] = useState(0)

  const updateScore = (value) => {
    // console.log(score)
    const newScore = score + value
    setScore(() => newScore)
    // console.log(score)
  }

  return (
    <>
      <div className='min-h-screen flex-col'>
        <div className='flex justify-center'>
          <h1>Score: {score}</h1>
        </div>
        <div className='flex place-items-center justify-center gap-5'>
          {Array.from({ length: 6 }).map((_, index) => (
            <Dice
              key={index}
              count={randDice()}
              roll={true}
              click={updateScore}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
