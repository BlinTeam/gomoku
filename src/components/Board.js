import React from 'react'
import Square from "./Square"
import Styles from "./Board.module.css"

const Board = ({values}) => {
  return (
      <div className={Styles.board}>
        {values.map((it, i) =>
            <Square
                key={i}
                value={it}
            />
        )}
      </div>
  )
}

export default Board