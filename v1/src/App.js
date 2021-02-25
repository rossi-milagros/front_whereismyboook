import React, {Suspense}from 'react'
import './App.css';

import { People } from './components/people';
import { Categories } from './components/categories';
import { BooksForm, BooksList } from './components/books';
//import { PeopleContext, CategoriesContext, BooksContext } from './AppContext';
//import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Where is my book</h1>
      </header>
      
      <div className="People-container">
        {/* <PeopleForm/>
        <PeopleList/> */}
         {/* <BooksList/>
          <br/><br/><br/>
          <People/>
          <br/><br/><br/>
          <Categories/>
          <br/><br/><br/>
          <BooksForm/>*/}
         <Router>
          
          <Route exact path="/people" component={People} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/bookform" component={BooksForm} />
          <Route exact path="/" component={BooksList} />

        </Router>
 
        

      </div>
    </div>
  );
}

export default App;
