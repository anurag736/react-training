import React from 'react';
import Board from './board'
import StatusMessage from './status'
const Game=(props)=>{
    return (
    <div>
        <StatusMessage />
        <Board />
        
    </div>
    )
};

export default Game;