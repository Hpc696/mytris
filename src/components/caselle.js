import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faO } from '@fortawesome/free-solid-svg-icons';
export default function Casella({ onClick, stato}) {
    if(stato===0){
      stato=<span> </span>;
    }else if(stato===1){
      stato= <FontAwesomeIcon className='fa-3x' color='white' icon={faXmark}/>
    }else{
      stato= <FontAwesomeIcon className='fa-3x' color='white' icon={faO}/>
    }
    return (
      <button className="square bg-primary" onClick={onClick}>
      {stato}
      </button>
    );
}