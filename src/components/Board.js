import React from 'react'
import Square from "./Square"

const Board = ({size, values, step}) => {
  return (
      <div>
        {values.map(({it, i} => {
          <Square value={it} onClick={() => {step(i)}}/>
        })}
      </div>
  )
}

export default Board