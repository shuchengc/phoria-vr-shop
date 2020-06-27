import OrderActionTypes from './order.types'

const INITIAL_STATE = {
  orders: []
}

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderActionTypes.FETCH_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload
      }
    default:
      return state
  }
}

export default orderReducer
