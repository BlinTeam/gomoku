import React, {useState} from 'react'
import Styles from './Square.module.css'

const Square = ({value, onClick}) => {
  const x = String.fromCharCode(10006)
  const o = String.fromCharCode(2662)

  const [isDisabled, setDisabled] = useState(false)

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
            onClick={() => {
              onClick();
              setDisabled(true)
            }}
            disabled={isDisabled}
        >
          {value}
        </button>
      </div>
  )
}

export default Square
