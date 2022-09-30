import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import calcolovincitore from './vincitore'

function controllo(caselle, prossimo) {
  const vincitore = calcolovincitore(caselle)
  if (vincitore) {
    return `Vincitore: ${vincitore}`
  } else if (caselle.every(Boolean)) {
    return `Parità`
  } else {
    return `Gioca: ${prossimo ? 'X' : '0'}`
  }
}

function gameReducer(state, action) {
  const {caselle, prossimo} = state
  switch (action.type) {
    case 'SELECT_casella': {
      const {casella} = action
      const vincitore = calcolovincitore(caselle)
      if (vincitore || caselle[casella]) {
        return state
      }
      const caselleCopy = [...caselle]
      caselleCopy[casella] = prossimo ? 'X' : '0'
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

function Tabella() {
  const [state, dispatch] = React.useReducer(gameReducer, {
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

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {rendercasella(0)}
        {rendercasella(1)}
        {rendercasella(2)}
      </div>
      <div className="board-row">
        {rendercasella(3)}
        {rendercasella(4)}
        {rendercasella(5)}
      </div>
      <div className="board-row">
        {rendercasella(6)}
        {rendercasella(7)}
        {rendercasella(8)}
      </div>
    </div>
  )
}

function Gioco() {
  return (
    <div className="gioco">
      <Tabella />
    </div>
  )
}

ReactDOM.render(<Gioco />, document.getElementById('root'));