import React from 'react'
import { Route } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import CollectionPage from '../collection/collection.component'
import {connect} from 'react-redux'
import { ShopPageContainer } from './shop.styles'
import WIthSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import {selectIsCollectionFetching,  selectIsCollectionLoaded} from '../../redux/shop/shop.selectors'
const CollectionOverviewWithSpinner = WIthSpinner(CollectionsOverview)
const CollectionPageWithSpinner=WIthSpinner(CollectionPage)
class ShopPage extends React.Component {
componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
       }
 render(){
        const {match,isCollectionFetching,isCollectionLoaded} = this.props
        return(   
                <ShopPageContainer>
                   <Route exact path = {`${match.path}`} render={(props) => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching}{...props}/>)}/>
                   <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded}{...props}/>)}/>
                </ShopPageContainer>
        )}
}
const mapSateToProps = createStructuredSelector({
isCollectionFetching: selectIsCollectionFetching,
isCollectionLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapSateToProps, mapDispatchToProps)(ShopPage)                                        