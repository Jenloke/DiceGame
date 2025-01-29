import { useState } from 'react'
import Dice from './Dice'

import { randDice } from './utils/random'

function App() {
  const [score, setScore] = useState(0)

  const updateScore = (value) => {
    // console.log(score)
    const newScore = score + value
    setScore(newScore)
    // console.log(score)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <div
      className={`
        h-[100svh] flex flex-col gap-2 justify-center items-center
        ${score % 2 === 1 ? 'bg-green-300' : 'bg-orange-300'}
      `}
    >
      <div className='font-bold'>
        <h1>Score: {score}</h1>
      </div>
      <div>
        <button
          onClick={resetScore}
          className={`p-1 border-black border-1 rounded-md shadow-md`}
        >
          Reset
        </button>
      </div>
      <div className='flex justify-center gap-5'>
        {Array.from({ length: 2 }).map((_, index) => (
          <Dice
            key={index}
            count={randDice()}
            roll={true}
            click={updateScore}
          />
        ))}
      </div>
    </div>
  )
}

export default App
