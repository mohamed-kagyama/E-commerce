import React from "react";
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss'
import CollectionPreview from '../Collection-Preview/collection-preview.component';
import { selectShopData } from '../../redux/shop/shop.selectors';



const CollectionOverview = ({collections})=> {
    return (<div>
        {
            collections.map(({id,...collectionProps})=>{
                return (<CollectionPreview key={id} {...collectionProps} />)
            })
        }
    </div>)
}

const mapStateToProps = createStructuredSelector({
    collections : selectShopData
})

export default connect(mapStateToProps)(CollectionOverview);