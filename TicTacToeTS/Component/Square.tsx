
import React, { useState } from 'react'
import Board from './Board'

interface SquareProps{
    onSquareClick: () => void;
    value: string | null;
    

}


const Square = ({value, onSquareClick}: SquareProps) => {

//   const [valuestate, setValueState] = useState(null)

//   function handleClick(){
//     console.log('clicked')
//     setValueState('X');
//   }


  return (
 
     <>
     <button className="square" onClick={onSquareClick}>{value}</button>
     </> 
    
      

  )
}

export default Square



