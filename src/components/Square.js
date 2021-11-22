import React from 'react'
import Styles from './Square.module.css'


const Square = ({onClick, value}) => {
  const style = [Styles.square]
  if (value) style.push(value)

  return (
      <div>
        <button
            className={style.join(' ')}
            onClick={onClick}
        > &#10006; </button>
      </div>
  )
}

export default Square