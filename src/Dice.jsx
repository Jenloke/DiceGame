import PropTypes from 'prop-types'
import { useState } from 'react'

import { randDice } from './utils/random'

const Dice = ({ count, roll, click }) => {
  const [newCount, setCount] = useState(count)
  const [newRoll, setRoll] = useState(roll)

  // set new val to the set val not the state val && fuck react and its state handling
  const handleClick = () => {
    // console.log(newCount)
    const rand = randDice()
    setCount(rand)
    click(rand)
    // console.log(rand)
  }

  return (
    <div
      className={`
        flex-col place-items-center 
        py-5 px-3 border-1 rounded-2xl shadow-md
        ${newRoll ? 'bg-gray-300' : 'bg-red-300'}
        ${newRoll ? 'border-black' : 'border-red-900'}
        ${newRoll ? 'text-black' : 'text-red-600'}
      `}
    >
      <h1>{newCount}</h1>

      <div className='flex gap-5'>
        <button onClick={newRoll ? handleClick : null}>ROLL</button>
        <button
          onClick={() => {
            setRoll(!newRoll)
          }}
          className={``}
        >
          LOCK
        </button>
      </div>
    </div>
  )
}

Dice.propTypes = {
  count: PropTypes.number,
  roll: PropTypes.bool,
  click: PropTypes.elementType,
}

export default Dice
