import React from 'react';
import Board from './board';
import StatusMessage from './status';
import ResetButton from './reset-button';
import {checkGame} from '../services/tick-tac-toe';
import Timer from './timer';

class Game extends React.Component {


    getInitState=()=>{
        return {
            next: "O",
            cells:[
                null, null, null,
                null, null, null, 
                null, null, null
            ],
            message:"Next Move 'O'",
            moves:0,
            renderCount:0
        };
    }

    
    componentDidMount() {
       // this.oTimer.current.start();
    }

    handleCellClick=(id)=>{
        console.log("cell",id, "clicked");
        
        let cells= [...this.state.cells]; //create a new array with existing values
        
        if(cells[id]!==null)
            return;
        
        cells[id]=this.state.next;
        let result= checkGame(cells);
        let message="";

        const next= this.state.next==="O" ? "X" : "O";
        // const toStop= this.state.next==="O"? this.oTimer: this.xTimer;
        // const toStart= next==="X"? this.xTimer: this.oTimer;
        // toStop.current.stop();
        // toStart.current.start();

        const moves=this.state.moves+1;
        

        if(result.winner){
            message=`${result.winner} Wins`;
        } else if(result.gameOver){
            message=`Game ends Stalemate`;
        } else{
            message= `Moves: ${moves}, Next: '${next}'`;
        }


        
        
        this.setState({cells:cells});

        this.setState({next,message,moves});


    }

    

    
    constructor(props) {
        super(props);
        this.state= this.getInitState();
        this.oTimer=React.createRef();
        this.xTimer=React.createRef();
    }



    render=()=>{


        const handleReset=()=>{
            this.setState(this.getInitState());
        }

        //this.setState({renderCount:this.state.renderCount+1});
        
        return (
            <div className="game">
                <div className="clocks">
                    <Timer ref={this.oTimer} running={this.state.next==="O"} label="O" manualControls={false} />
                    <Timer ref={this.xTimer} running={this.state.next==="X"} label="X" manualControls={false} />     
                </div>
               
                <StatusMessage message={this.state.message}/>
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} />
                <ResetButton  visible={this.state.moves>0} onReset={handleReset} caption="Reset Game"/>
            </div>
            );
    }


}



const _Game = (props)=>{


    return (
        <div className="game">
            <Timer/>
            <StatusMessage/>
            <Board/>
            <button className='reset-button'>Reset</button>
        </div>
        );
};


export default Game;

