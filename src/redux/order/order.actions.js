import axios from 'axios'
import OrderActionTypes from './order.types'

const API_ROOT_URL = 'http://localhost:8080'
export const fetchAllOrders = orders => ({
  type: OrderActionTypes.FETCH_ALL_ORDERS,
  payload: orders
})

export const fetchOrders = () => {
  const authCode = `Bearer ${localStorage.getItem('auth-token')}`
  return (dispatch, getState) => {
    return axios
      .get(`${API_ROOT_URL}/orders`, {
        headers: {
          Authorization: authCode
        }
      })
      .then(value => {
        const orders = value.data
        dispatch(fetchAllOrders(orders))
      })
      .catch(err => console.log('error:', JSON.stringify(err)))
  }
}
