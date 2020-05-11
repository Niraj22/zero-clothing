import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview  from '../collection-preview/collection-preview.component'
import {selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import {CollectionOverviewComponent} from './collection-overview.styles'
const CollectionsOverview = ({ collections }) => (
    <CollectionOverviewComponent>
        {
            collections.map(({id, ...OtherCollectionProps}) => (
                <CollectionPreview key ={id} {...OtherCollectionProps}/>
            ))
        }
    </CollectionOverviewComponent>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview 
})
export default connect(mapStateToProps)( CollectionsOverview)