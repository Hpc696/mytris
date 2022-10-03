import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faO, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Calcolovincitore from "../vincitore.js"
import Casella from './caselle.js'

export default function Board () {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [isX, setIsX] = React.useState(true);

  const Click = (i) => {
    if (Calcolovincitore(squares) || squares[i]) {
      return
    }
    
    squares[i] = isX ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faO}/>
    setSquares(squares)
    setIsX(!isX)
  }

  const vincitore = Calcolovincitore(squares)
  let status=0;
  
  if (vincitore) {
    status = `Vincitore: ${vincitore}`;
  } else {
    status = 'Tocca a: ' + (isX ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faO} />);
  }
  
  const Restart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  const renderSquare = (i) => {
    return <Casella value={squares[i]} onClick={() => Click(i)} />
  }
  for(let i=0; i<3;i++){
    Array.push(<div className='row-board'>{renderSquare}</div>)
  }
  return (
    <div className="board">
       {Array}
    <div className="status">{status}</div>
    <button className="restart" onClick={Restart}>---Rigioca---</button>
    </div>
  )
}


