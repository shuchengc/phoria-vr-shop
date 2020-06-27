import ProductActionTypes from './product.types'
import axios from 'axios'
const API_ROOT_URL = process.env.API_ROOT_URL || 'http://localhost:8080'
export const updateProducts = products => ({
  type: ProductActionTypes.FETCH_ALL_PRODUCTS,
  payload: products
})

export const fetchProducts = () => {
  return (dispatch, getState) => {
    axios
      .get(`${API_ROOT_URL}/products`)
      .then(value => {
        console.log('value:', value)
        const products = value.data
        dispatch(updateProducts(products))
      })
      .catch(err => console.log('err:', JSON.stringify(err)))
  }
}
