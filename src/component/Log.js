import React from 'react'

const Log = ({gameTurns}) => {
  return (
    <ol id='log'>
    {
      gameTurns.map((turn, index) =>  <li key={index}> {turn.player} selected {turn.square.rowIndex}, {turn.square.rowElementIndex}</li>)
    }
    </ol>
  )
}

export default Log
