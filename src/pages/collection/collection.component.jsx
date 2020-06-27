import React from 'react'

import CollectionItem from '../../components/collection-item/collection-item.component'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles'

const CollectionPage = ({ collections }) => {
  // const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>Phoria VR Products</CollectionTitle>
      <CollectionItemsContainer>
        {collections.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

export default CollectionPage
