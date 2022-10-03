import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import './style.css'
//import Tabella from './components/tabella.js'
import Casella from './components/caselle';
import Tabella from './components/tabella';

/*function Gioco() {
  return (
    <div className="gioco">
      <Tabella />
    </div>
  )
}*/
//ReactDOM.render(<Gioco />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Tabella />);