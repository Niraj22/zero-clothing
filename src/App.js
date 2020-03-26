import React from 'react';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SIgnInANdSIgnUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utlis'


class App extends React.Component {
  constructor(){
  super()
    this.state = {
      currentUser: null
    }
}
unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
   this.setState({currentUser: user})
 })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
          <Route  exact path = '/' component = {Homepage}/>
          <Route  exact path = '/shop' component = {ShopPage}/>
          <Route  exact path = '/signin' component = { SIgnInANdSIgnUpPage}/>
      </Switch>
      </div>
    );
  }
  }
export default App;