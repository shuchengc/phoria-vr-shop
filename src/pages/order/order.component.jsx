import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import OrderItem from '../../components/order-item/order-item.component'

import { fetchOrders } from '../../redux/order/order.actions'
import { selectOrders } from '../../redux/order/order.selectors'

import {
  OrderPageContainer,
  OrderHeaderContainer,
  HeaderBlockContainer,
  TotalContainer
} from './order.styles'

class OrderPage extends Component {
  componentDidMount() {
    this.props.fetchOrders()
  }
  render() {
    const { orders } = this.props
    return orders && orders.length > 0 ? (
      <div>
        {orders.map(order => (
          <OrderPageContainer>
            <h3>#{order.id}</h3>
            <OrderHeaderContainer>
              <HeaderBlockContainer>
                <span>Product</span>
              </HeaderBlockContainer>
              <HeaderBlockContainer>
                <span>Description</span>
              </HeaderBlockContainer>
              <HeaderBlockContainer>
                <span>Quantity</span>
              </HeaderBlockContainer>
              <HeaderBlockContainer>
                <span>Price</span>
              </HeaderBlockContainer>
            </OrderHeaderContainer>
            {order.order_items.map(orderItem => (
              <OrderItem key={orderItem.id} orderItem={orderItem} />
            ))}
            <TotalContainer>TOTAL: ${order.totalPrice}</TotalContainer>
          </OrderPageContainer>
        ))}
      </div>
    ) : null
  }
}

const mapStateToProps = createStructuredSelector({
  orders: selectOrders
})

export default connect(mapStateToProps, { fetchOrders })(OrderPage)
