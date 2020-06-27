import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
)

export const selectCartTotal = createSelector([selectCartItems], cartItems => {
  const totalQuantity = cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity,
    0
  )
  let totalPrice = cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )

  if (totalQuantity < 10 && totalQuantity > 0) {
    totalPrice += 30
  } else {
    if (totalQuantity > 20) {
      totalPrice *= 0.9
    }
  }
  return totalPrice
})
