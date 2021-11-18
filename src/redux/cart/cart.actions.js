import cartActionTypes from "./cart.types";

export const ToggleCartHidden = () => ({
    type : cartActionTypes.CART_TOGGLE_HIDDEN
})

export const addItem = item => ({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})