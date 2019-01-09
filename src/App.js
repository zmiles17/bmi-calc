import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Home';
import Nav from './components/Homepage/Nav';
import BMIcalc from './components/Fitness/BMI/Calc';
import BMRcalc from './components/Fitness/BMR/Calc';
import './reset.css';
import './App.css';
import OneRepMax from './components/Fitness/1RM/Calc';

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
          <Route exact path='/bmr' component={BMRcalc} />
          <Route exact path='/one-rep-max' component={OneRepMax} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
