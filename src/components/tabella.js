import calcolovincitore from "../vincitore.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faO, faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import controllo  from "./turnodi.js"
import Casella from "./caselle.js"

function Tabella() {
    const [state, dispatch] = React.useReducer(Inserimento, {
      caselle: Array(9).fill(null),
      prossimo: true,
    })
    const {caselle, prossimo} = state
    function rendercasella(index) {
      return (
        <button className="casella" onClick={() => selectcasella(index)}>
          {caselle[index]}
        </button>
      )
    }
  
    function selectcasella(casella) {
      dispatch({type: 'SELECT_casella', casella})
    }
  
    const status = controllo(caselle, prossimo)
    
    let celle= [0,1,2];
    let lista= [];

    for(let i=0;i<3;i++){
      lista.push(<div className="board-row"> {celle.map(x => <Casella/>)} </div>);

      }
     return (
      <div>
        <div className="status">{status}</div>
        {lista}
        <div className="board-row">
          
        </div>
        <div className="board-row">
          
        </div>
        <div className="board-row">
         
        </div>
      </div>
    )
  }

export function Inserimento(state, action) {
    const {caselle, prossimo} = state
    switch (action.type) {
      case 'SELECT_casella': {
        const {casella} = action
        const vincitore = calcolovincitore(caselle)
        if (vincitore || caselle[casella]) {
          return state
        }
        let caselleCopy = [...caselle]
        caselleCopy[casella] = prossimo ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faO} />
        return {
          caselle: caselleCopy,
          prossimo: !prossimo,
        }
      }
      default: {
        throw new Error(
          `Errore ${action.type}. Dovevo mettercelo`,
        )
      }
    }
  }
export default Tabella;