import React from 'react'
import Styles from './Square.module.css'


const Square = ({value, onClick}) => {
  const x = String.fromCharCode(9773)
  const o = String.fromCharCode(9675)

  const style = [Styles.square]
  if (value == x) {
    console.log('X')
    style.push(Styles.x)

  }
  if (value == o) {
    console.log('O')
    style.push(Styles.o)
  }

  return (
      <div>

        <button
            className={style.join(' ')}
            onClick={onClick}
        >
          {value}
        </button>
      </div>
  )
}

export default Square