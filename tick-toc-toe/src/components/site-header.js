import React from 'react';
import {SiteTitle} from './site-title'
const styles={
    header:{
        background:"lightgreen"
    }
    }

const SiteHeader=function(props){
    console.log('agrs',props);
    return(

    <div className="header">
        {/* <h1><a href="#">{props.title}</a></h1> */}
        <SiteTitle>{props.title}</SiteTitle>
        {/* <ul className="nav">
            <li><a href="">Docs</a></li>
            <li><a href="">About</a></li>
        </ul> */}
    </div>
);
};

export default SiteHeader;