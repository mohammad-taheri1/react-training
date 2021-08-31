import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import Blogs from './components/Blogs';
import Products from './components/Products';
import AboutUS from './components/AboutUs';
import Navbar from './components/Navbar';

import classes from './App.module.css'

class App extends Component {
  render() {
    return (
      <div>
       <div className={classes.topbar}>
          <Navbar />
       </div>

        <div>
          <Switch>
              <Route path="/blogs" component={Blogs} />
              <Route path="/products" component={Products} />
              <Route path="/aboutus" component={AboutUS} />
              <Route path="/" component={HomePage} />
           </Switch>
        </div>
      </div>
    )
  }
}

export default App