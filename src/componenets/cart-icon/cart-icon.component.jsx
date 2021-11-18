import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden,itemCount})=>{
    return (
        <div className="cart-icon" onClick={ToggleCartHidden}>
            <ShoppingIcon  className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}


const dispatchStateToProps = (dispatch) => ({
    ToggleCartHidden : () => dispatch(ToggleCartHidden())

})

const mapStateToProps = ( state) => ({
    itemCount : selectCartItemsCount(state)
})
export default connect(mapStateToProps,dispatchStateToProps)(CartIcon);