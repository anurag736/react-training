import React from 'react'

const CheckGame=(cells)=>{
    let result={
        winner:null,
        winningCombo:null,
        gameOver:false
    };
    const winningCombos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let winningCombo of winningCombos)
        {
            let [first,second,third]=winningCombo;
            if(cells[first]!==null && cells[first]===cells[second] && cells[first]===cells[third]){
            result.winner=cells[first];
            result.winningCombo=winningCombo;
            result.gameOver=true;
            return result;
        }
    }
    let moves = cells.filter(cell=>cell).length;
    result.gameOver=moves===9;

    return result;
}

export default CheckGame;