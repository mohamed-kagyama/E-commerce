import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { createStructuredSelector} from 'reselect'

import './header.styles.scss';

import { ReactComponent as Logo} from '../../assets/crwn.svg';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const  Header = ({currentUser,hidden})=>{
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
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);