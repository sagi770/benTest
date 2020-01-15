import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products} />
          
        </Switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
