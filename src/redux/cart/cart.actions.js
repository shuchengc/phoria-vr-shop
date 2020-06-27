import CartActionTypes from './cart.types'
import axios from 'axios'
const API_ROOT_URL = process.env.ROOT_URL || 'http://localhost:8080'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const emptyItemCart = () => ({
  type: CartActionTypes.EMPTY_ITEMS
})

export const submitOrderItmes = (user, items) => {
  const authCode = `Bearer ${localStorage.getItem('auth-token')}`
  const data = {
    order: {
      user_id: user.id,
      order_items_attributes: items.map(item => ({
        product_id: item.id,
        quantity: item.quantity
      }))
    }
  }
  return (dispatch, getState) => {
    return axios
      .post(`${API_ROOT_URL}/orders`, data, {
        headers: {
          Authorization: authCode
        }
      })
      .then(value => {
        console.log('value:', value)
        dispatch(emptyItemCart())
      })
      .catch(err => console.log('error:', JSON.stringify(err)))
  }
}
