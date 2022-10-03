import React from 'react'
export default function Casella({ onClick, value }) {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }