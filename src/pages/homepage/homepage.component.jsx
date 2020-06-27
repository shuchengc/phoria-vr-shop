import React, { Component } from 'react'

import { HomePageContainer } from './homepage.styles'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectProducts } from '../../redux/product/product.selectors'
import { fetchProducts } from '../../redux/product/product.actions'
import CollectionPage from '../collection/collection.component'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    return (
      <HomePageContainer>
        <CollectionPage collections={this.props.products} />
      </HomePageContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  products: selectProducts
})

export default connect(mapStateToProps, { fetchProducts })(HomePage)
