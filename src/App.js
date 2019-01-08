import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Homepage/Nav';
import Homepage from './components/Homepage/Home';
import BMIcalc from './components/Fitness/BodyMassIndex/Calc';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Nav />
          </header>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/bmi' component={BMIcalc} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
