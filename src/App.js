import {Routes,Route,Navigate} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import { HomePage } from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './componenets/Header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';

class App extends  React.Component{
  
  UnsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.UnsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth)=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        }) 
      }

      setCurrentUser(userAuth)
    })
  }
  
  componentWillUnmount(){
    this.UnsubscribeFromAuth();
  }

  render(){
    return (
    <div>
      <Header />
      <Routes>
        <Route  exact path="/" element={<HomePage />} />
        <Route  exact path="/shop" element={<ShopPage/>} />
        <Route exact path="/shop/:collectionID" element={<CollectionPage />} />
        <Route  
        exact 
        path="/signIn" 
        element={
          this.props.currentUser ? (
            <Navigate to="/" />
          ) : (
            <SignInAndSignUpPage/>
          )}
        />
        <Route exact path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
    
    
  );
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = (dispatch) =>({
   setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
