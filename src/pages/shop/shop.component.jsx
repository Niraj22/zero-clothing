import React from 'react'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { selectCollections } from '../../redux/shop/shop.selectors'

const ShopPage = ({collections}) =>(
(
        <div className ='shop-page'>
        {
            collections.map(({id, ...OtherCollectionProps}) => (
                <CollectionPreview key ={id} {...OtherCollectionProps}/>
            ))
        }</div>
    )
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)