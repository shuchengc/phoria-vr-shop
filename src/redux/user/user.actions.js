import { UserActionTypes } from './user.types'
import axios from 'axios'
const API_ROOT_URL = process.env.ROOT_URL || 'http://localhost:8080'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export const userSignIn = user => {
  return (dispatch, getState) => {
    return axios
      .post(`${API_ROOT_URL}/user_token`, { auth: user })
      .then(value => {
        const authToken = value.data.jwt
        const payload = value.data.payload
        const user = {
          id: payload[0].sub,
          email: payload[0].email
        }
        window.localStorage.setItem('auth-token', authToken)
        dispatch(setCurrentUser(user))
      })
      .catch(err => {
        console.log('error:', JSON.stringify(err))
      })
  }
}

export const userSignUp = user => {
  return (dispatch, getState) => {
    return axios
      .post(`${API_ROOT_URL}/users`, { user: user })
      .then(val => {
        console.log('sign up val:', val)
        const authToken = val.data.jwt
        const payload = val.data.payload
        const user = {
          id: payload.sub,
          email: payload.email
        }
        window.localStorage.setItem('auth-token', authToken)
        dispatch(setCurrentUser(user))
      })
      .catch(err => {
        console.log('error:', JSON.stringify(err))
      })
  }
}

export const userSignOut = () => {
  return (dispatch, getState) => {
    localStorage.setItem('auth-token', null)
    dispatch(setCurrentUser(null))
  }
}
