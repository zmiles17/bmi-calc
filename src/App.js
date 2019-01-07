import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BMIcalc from './components/bmi-calculator/Calc';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <Link to={`/bmi-calculator`} >BMI Calculator</Link>
            </nav>
          </header>
          <Route exact path='/bmi-calculator' component={BMIcalc} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
