import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import productReducer from './product/product.reducer'
import orderReducer from './order/order.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  order: orderReducer
})

export default persistReducer(persistConfig, rootReducer)
