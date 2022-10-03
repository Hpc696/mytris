import React from 'react'
//import ReactDOM from 'react-dom' versione vecchia ormai
import { createRoot } from 'react-dom/client';
import './style.css'
import Board from './components/tabella';
/*function Gioco() {
  return (
    <div className="gioco">
      <Tabella />
    </div>
  )
}*/
//ReactDOM.render(<Gioco />, document.getElementById('root')); versione vecchia ormai
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <Board />);