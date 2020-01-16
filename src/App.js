import React from 'react';

import './App.css';
import Products from './components/Products';
import SingleItem from './components/SingleItem'; 

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products} />
         <Route exact path='/product/:id' component={SingleItem} />
        </Switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
