import React from 'react';
import "./app.css";
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import BookDetailsScreen from './screens/book-details-screen';
const App=()=>{

    return (
        <div className='app'>
            <AppHeader title="Book's Web" />
            <div className="container">
                <BookDetailsScreen/>
            </div>
            <AppFooter copyright="conceptarchitect.in" />
        </div>
    );
};


export default App;