import React from 'react'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import {connect} from 'react-redux'
import { ShopPageContainer } from './shop.styles'
import WIthSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utlis'
import {updateCollections} from '../../redux/shop/shop.actions'
const CollectionOverviewWithSpinner = WIthSpinner(CollectionsOverview)
const CollectionPageWithSpinner=WIthSpinner(CollectionPage)
class ShopPage extends React.Component {
state={
        loading:true
}
unsubscribeFromSnapshot = null;
componentDidMount(){
        const {updateCollections} = this.props      
         const collectionRef = firestore.collection('collections')
         collectionRef.get().then(snapshot => {
        const collectionsMap =  convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
        this.setState({loading:false})
})
       }
 render(){
        const {match} = this.props
        const {loading}  = this.state
        return(   
                <ShopPageContainer>
                   <Route exact path = {`${match.path}`} render={(props) => (<CollectionOverviewWithSpinner isLoading={loading}{...props}/>)}/>
                   <Route path={`${match.path}/:collectionId`} render={(props) => (<CollectionPageWithSpinner isLoading={loading}{...props}/>)}/>
                </ShopPageContainer>
        )}
}
const mapDispatchToProps = dispatch => ({
updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage)