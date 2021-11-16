import './App.css';
import {Routes,Route} from 'react-router-dom';
import React from 'react';
import { HomePage } from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './componenets/Header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.util';

class App extends  React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  
  UnsubscribeFromAuth = null;

  componentDidMount(){
    this.UnsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
    })
  }
  
  componentWillUnmount(){
    this.UnsubscribeFromAuth();
  }

  render(){
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route  exact path="/shop" element={<ShopPage/>} />
        <Route  exact path="/signIn" element={<SignInAndSignUpPage/>} />
      </Routes>
    </div>
    
    
  );
    }
}

export default App;
