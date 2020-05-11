import React from 'react'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { ShopPageContainer } from './shop.styles'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
const ShopPage = ({match}) =>(
        <ShopPageContainer>
           <Route exact path = {`${match.path}`} component = {CollectionsOverview}/>
           <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </ShopPageContainer>
)
export default ShopPage 