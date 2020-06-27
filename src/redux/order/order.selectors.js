import { createSelector } from 'reselect'

const selectOrder = state => {
  return state.order
}

export const selectOrders = createSelector([selectOrder], order => order.orders)
