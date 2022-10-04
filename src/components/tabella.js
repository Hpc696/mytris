import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faO, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Calcolovincitore from "../vincitore.js"
import Casella from './caselle.js'

export default function Board () {
  const [squares, setSquares] = React.useState(Array(9).fill(0));
  const [isX, setIsX] = React.useState(true);
  const [cont, setcont] = React.useState(0);
  const increm = () => {
    setcont(cont => cont+1);
    return
  }
  const Click = (i) => {
    if (Calcolovincitore(squares) || squares[i]) {
      return
    }
    squares[i] = isX ? 1 : 2 ;
    setSquares(squares)
    setIsX(!isX)
    increm();
  }

  function Turnodi(){
  const vincitore = Calcolovincitore(squares)
  let stato=0;
  if (vincitore===1) {
    stato = <span> Vincitore: <FontAwesomeIcon icon={faXmark}/></span>
  } else if (vincitore===2) {
    stato = <span> Vincitore: <FontAwesomeIcon icon={faO}/></span>
  } else {
    stato = <span>Tocca a: <FontAwesomeIcon icon={isX ? faXmark : faO}/> </span>
  }
  if (cont===9){
    stato = <span>PAREGGIO </span>
  }
  return (
    stato
  )
}
  
  const Restart = () => {
    setIsX(true)
    setSquares(Array(9).fill(0))
    setcont(0);
  }

  
  let lista = []
  for(let row=0; row<3; row++){
    let rowEL= (<div key={row} className='row-board'>
      {[0,1,2].map((col) => <Casella key={row*3+col} stato={squares[row*3+col]} onClick={() => Click(row*3+col)} /> )}
    </div>)
    lista.push(rowEL)
  }

  return (
    <div className="board">
       {lista}
    <div className="stato">{Turnodi()}</div>
    <button className="restart" onClick={Restart}>---Rigioca---</button>
    </div>
  )
}
