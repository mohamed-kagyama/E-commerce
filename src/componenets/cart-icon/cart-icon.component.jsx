import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden})=>{
    return (
        <div className="cart-icon" onClick={ToggleCartHidden}>
            <ShoppingIcon  className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}


const dispatchStateToProps = (dispatch) => ({
    ToggleCartHidden : () => dispatch(ToggleCartHidden())

})
export default connect(null,dispatchStateToProps)(CartIcon);