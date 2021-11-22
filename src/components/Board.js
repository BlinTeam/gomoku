import React from 'react'
import Square from "./Square"
import Styles from "./Board.module.css"

const Board = ({values, step}) => {
  return (
      <div className={Styles.board}>
        {values.map((it, i) =>
          <Square
              value={it}
              onClick={() => step(i)}
          />
          )}
      </div>
  )
}

export default Board