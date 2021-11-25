import React, {useState} from 'react'
import Board from "./components/Board";


function App() {

  const [values, setValues] = useState([
        '', '', '',
        '', '', '',
        '', '', '',
      ]
  )

  return (

      <div>
        <h1 style={{textAlign: "center"}}>Tic-Tac-Toe</h1>
        <Board values={values}/>
      </div>

  );
}

export default App;
