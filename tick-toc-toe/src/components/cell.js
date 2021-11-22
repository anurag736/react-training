import React from 'react';

const Cell=(props)=>{
    return (<div class="board">
        <div id="block_0" class="block">O</div>
        <div id="block_1" class="block"></div>
        <div id="block_2" class="block"></div>
        <div id="block_3" class="block"></div>
        <div id="block_4" class="block">X</div>
        <div id="block_5" class="block"></div>
        <div id="block_6" class="block"></div>
        <div id="block_7" class="block"></div>
        <div id="block_8" class="block"></div>
    </div>)
};

export default Cell;