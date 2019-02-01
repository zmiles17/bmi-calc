import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomepageLayout, HomepageHeading } from './components/Homepage/Header';
import BMIcalc from './components/Fitness/BMI/Calc';
import BMRcalc from './components/Fitness/BMR/Calc';
import Tracker from './components/Tracker/Tracker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faSmile, faFrown } from '@fortawesome/free-solid-svg-icons'
import Errorpage from './components/404/Error';

library.add(faDumbbell, faSmile, faFrown)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomepageLayout>
          <Switch>
          <Route exact path='/' component={HomepageHeading} />
          <Route exact path='/bmi' component={BMIcalc} />
          <Route exact path='/bmr' component={BMRcalc} />
          <Route exact path='/tracker' component={Tracker} />
          <Route path='*' component={Errorpage} />
          </Switch>
        </HomepageLayout>
      </BrowserRouter>
    );
  }
}

export default App;
