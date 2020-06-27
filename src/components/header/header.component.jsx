import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { userSignOut } from '../../redux/user/user.actions'
import { withRouter } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HeadMenuItemsContainer
} from './header.styles'

const Header = ({ currentUser, hidden, history, ...props }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      {currentUser ? (
        <HeadMenuItemsContainer>
          <OptionLink
            as="div"
            onClick={() => {
              props.userSignOut()
              history.push('/')
            }}
          >
            SIGN OUT
          </OptionLink>
          <OptionLink to="/order">ORDER</OptionLink>
        </HeadMenuItemsContainer>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default withRouter(connect(mapStateToProps, { userSignOut })(Header))
