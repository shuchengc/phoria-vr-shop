import React from 'react'

import {
  OrderItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer
} from './order-item.styles'

const OrderItem = ({ orderItem }) => {
  const { quantity } = orderItem
  const { name, imageUrl, price } = orderItem.product
  return (
    <OrderItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <span>{quantity}</span>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
    </OrderItemContainer>
  )
}

export default OrderItem
