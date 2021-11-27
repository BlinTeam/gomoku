import React from 'react';

const Result = (res) => {
  //const winner = (res == 2) ? "X" : ((res == 3) ? "O" : "")

  return (
      <div>
        {(res === 2) ? "X" : ((res === 3) ? "O" : "")}'s won!
      </div>
  )
}

export default Result