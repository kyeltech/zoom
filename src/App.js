import React from 'react';
import Home from './Component/Home'
// import About from './About'
import Send from './Component/Send'
import Track from './Component/Track'
import About from './Component/About'
import Contact from './Component/Contact'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import './index.css'
// import {Button} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Route exact path='/' component={Home}></Route>
    <Route exact path='/Track' component={Track}></Route> 
    <Route exact path='/send' component={Send}></Route> 
     <Route path='/about' component={About}></Route>
     <Route path='/contact' component={Contact}></Route>
    </Router>
      </header>
    </div>
  );
}

export default App;
