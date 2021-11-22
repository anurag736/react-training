import React from 'react';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import BookDetailsScreen from './screens/book-details-screen';


const App = ()=>{
    return(
        <div className='container'>
            <AppHeader title="Book's Web"></AppHeader>
            <BookDetailsScreen />
            <AppFooter title=""></AppFooter>

        </div>
    )
}

export default App;

