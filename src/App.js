import React, {useState} from 'react'
import Square from "./components/Square"
import Board from "./components/Board";



function App() {
    const x = String.fromCharCode(9773)
    const o = String.fromCharCode(9675)

    const [move, setMove] = useState(0)

    const [values, setValues] = useState([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ])

    const doMove = (i) => {
        let newValues = [...values]
        newValues[i] = (move % 2 === 0) ? x : o
        console.log(newValues)
        setValues(values => newValues)
        setMove(move => move + 1)
    }

    return (
      <div>
          <button style={{color: 'pink'}} value="kek"/>
        <Board values={values} step={doMove}/>
      </div>

    );
}

export default App;
