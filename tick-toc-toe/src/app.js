import React from 'react';
import './app.css';
import SiteHeader from './components/site-header';
import Game from './components/game';

export default class App extends React.Component{
    render(props) {
        return(
<div className="main">
    <SiteHeader title="Tic Tac Toe" color="blue"/>
    <div className="container">
        <Game />
    </div>
</div>
);
}
}