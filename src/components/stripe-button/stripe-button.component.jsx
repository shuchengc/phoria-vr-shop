import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { submitOrderItmes } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const StripeCheckoutButton = ({ user, items, price, ...props }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51GwNr6IDRFqlRxlIFEhW4I6bz6b7ueTsOU63VUcC71m7bbl4AUP9IwghsIYEoZvVsL1MKOExCmXfRqiIQNiMDCeD00Nb3YE6Q6'

  const onToken = token => {
    console.log('user:', user)
    console.log('items:', items)
    props.submitOrderItmes(user, items)
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Phoria Co."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  items: selectCartItems
})

export default connect(mapStateToProps, { submitOrderItmes })(
  StripeCheckoutButton
)
