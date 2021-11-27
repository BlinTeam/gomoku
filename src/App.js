import React, {useState, useMemo} from 'react'
import Board from "./components/Board";
import Result from "./components/Result";

function App() {
    const x = String.fromCharCode(10006)
    const o = String.fromCharCode(2662)

    const [move, setMove] = useState(0)
    const [result, setResult] = useState(1)
    const [values, setValues] = useState([
            '', '', '',
            '', '', '',
            '', '', '',
        ]
    )

  const a = useMemo( () => {
      let first = false
      let second = false
      for (let i = 0; i < 3; i += 1)
      {
        first = (first || (values[i] == values[i + 1] && values[i + 1] == values[i + 2] && values[i] == x))
        first = (first || (values[i] == values[i + 3] && values[i + 3] == values[i + 6] && values[i] == x))
        second = (second || (values[i] == values[i + 1] && values[i + 1] == values[i + 2] && values[i] == o))
        second = (second || (values[i] == values[i + 3] && values[i + 3] == values[i + 6] && values[i] == o))
      }
      first = (first || (values[0] == values[4] && values[4] == values[8] && values[0] == x))
      first = (first || (values[2] == values[4] && values[4] == values[6] && values[2] == x))
      second = (second || (values[0] == values[4] && values[4] == values[8] && values[0] == o))
      second = (second || (values[2] == values[4] && values[4] == values[6] && values[2] == o))
      if (first) return setResult(2)
      if (second) return setResult(3)
    }, [values])

    const doMove = (i) => {
        let newValues = [...values]
        newValues[i] = (move % 2 === 0) ? x : o
        console.log(newValues)
        setValues(newValues)
        setMove(move => move + 1)
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Tic-Tac-Toe</h1>
            {(result === 1) ? <Board values={values} step={doMove} /> : <Result res={result}/>}
        </div>
    )
}

export default App