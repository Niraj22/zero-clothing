import React from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'

const HatsPage =(props) => {
  console.log(props)
 return(
    <div>
      <h1>Hats page</h1>
    </div>) 
}
function App() {
  return (
    <div>
    <Switch>
        <Route  exact path = '/' component = {Homepage}/>
        <Route  exact path = '/hats' component = {HatsPage}/>
    </Switch>
    </div>
  );
}
export default App;
