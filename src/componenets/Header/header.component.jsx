import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crwn.svg';
import { auth } from '../../firebase/firebase.util';

const  Header = ({currentUser})=>{
    return (
        <div className="header">
            <Link className='logo-container' to="/">
                <Logo  className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to="/shop">
                    SHOP
                </Link>
                <Link className='option' to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> : <Link className="option" to="signIn">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
   currentUser : state.user.currentUser
});

export default connect(mapStateToProps)(Header);