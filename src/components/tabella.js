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
    status = (<span> Vincitore: ${vincitore} </span>);
  } else {
    status = (<span>Tocca a: <FontAwesomeIcon icon={isX ? faXmark : faO}/> </span>)
  }
  
  const Restart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  
  let lista = []
  for(let row=0; row<3; row++){
    let rowEL= (<div key={row} className='row-board'>
      {[0,1,2].map((n , col) => <Casella key={row*3+col} onClick={(squares[row*3+col]) => Click(row*3+col)} /> )}
    </div>)
    lista.push(rowEL)
  }
  return (
    <>
    <div className="board">
       {lista}
    <div className="status">{status}</div>
    <button className="restart" onClick={Restart}>---Rigioca---</button>
    </div>
    </>
  )
}
