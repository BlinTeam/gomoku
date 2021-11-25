import React from 'react'
import Styles from './Square.module.css'

const Square = ({value}) => {

  const style = [Styles.square]

  return (
      <div>
        <button
            className={style.join(' ')}
        >
          {value}
        </button>
      </div>
  )
}

export default Square
