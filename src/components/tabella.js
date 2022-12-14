import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faO, faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react'
import Calcolovincitore from "../vincitore.js"
import Casella from './caselle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'


export default function Board () {
  const [squares, setSquares] = React.useState(Array(9).fill(0));
  const [isX, setIsX] = React.useState(true);
  const [cont, setcont] = React.useState(0);
  const increm = () => {
    setcont(cont => cont+1);
    return
  }
//'stampa' valore di isx quando subisce variazioni 
  useEffect(()=>{
  console.log("test isx", isX)
}, [isX])

  const Click = (i) => {
    if (Calcolovincitore(squares) || squares[i]) {
      return
    }
    squares[i] = isX ? 1 : 2 ;
    setSquares(squares)
    setIsX(!isX)
    increm();
  }
  //stampa ora a ogni click 'test'
console.log("ora")
  function Turnodi(){
  const vincitore = Calcolovincitore(squares)
  let stato=0;
  if (vincitore===1) {
    stato = <span> VINCITORE: <FontAwesomeIcon className='m-1' color='#0d6efd' icon={faXmark}/></span>
  } else if (vincitore===2) {
    stato = <span> VINCITORE: <FontAwesomeIcon className='m-1' color='#0d6efd' icon={faO}/></span>
  } else if (cont===9){
    stato = <span> PAREGGIO </span>
  } else {
    stato = <span>TOCCA A: <FontAwesomeIcon className='m-1' color='#0d6efd' icon={isX ? faXmark : faO}/> </span>
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

  /*let griglia = [0,1,2].map((row) => 
        (
          <div key={row} className='row-board'>
            {[0,1,2].map((col) => <Casella key={row*3+col} stato={squares[row*3+col]} onClick={() => Click(row*3+col)} /> )}
          </div>
        ))
    
  ;
  */
  return (
    <div className="board">
       {/*griglia*/} {lista}
    <div className="stato position-relative fs-2 fw-bold m-5">{Turnodi()}</div>
    <Button className="restart btn btn-primary btn-lg" onClick={Restart}> RIGIOCA </Button>
    </div>
  )
}
