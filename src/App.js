import React, {useState} from 'react'
import Board from "./components/Board";

function App() {
    const x = String.fromCharCode(10006)
    const o = String.fromCharCode(2662)

    const [move, setMove] = useState(0)
    const [values, setValues] = useState([
            '', '', '',
            '', '', '',
            '', '', '',
        ]
    )

    const doMove = (i) => {
        let newValues = [...values]
        newValues[i] = (move % 2 === 0) ? x : o
        console.log(newValues)
        setValues(values => newValues)
        setMove(move => move + 1)
    }

    return (

        <div>
            <h1 style={{textAlign: "center"}}>Tic-Tac-Toe</h1>
            <Board values={values} step={doMove} />
        </div>

    );
}

export default App;