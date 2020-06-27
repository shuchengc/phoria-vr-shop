import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { SignUpContainer, SignUpTitle } from './sign-up.styles'
import { connect } from 'react-redux'
import { userSignUp } from '../../redux/user/user.actions'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      // const { user } = await auth.createUserWithEmailAndPassword(
      //   email,
      //   password
      // )

      // await createUserProfileDocument(user, { displayName })
      this.props.userSignUp({ email, password })
      this.setState({
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { email, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

export default connect(null, { userSignUp })(SignUp)
