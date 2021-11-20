import React from 'react';
import {connect} from 'react-redux';

import "./collection.styles.scss";
import CollectionItem from "../../componenets/collection-item/collection-item.componenet";
import { selectShopCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) =>{
    const {items,title} = collection;
    return(
       <div className="collection-page">
           <h2 className="title">Collection Page : {title}</h2>
           <div className="items">
               {
                    items.map(item=>(
                       <CollectionItem key={item.id} item={item} />
                   ))
               }
           </div>
       </div>
    )
}

const mapStateToProps = (state)=>{
    const collectionID = window.location.pathname.split("/")[2];
    return {collection : selectShopCollection(collectionID)(state)}
}
export default connect(mapStateToProps)(CollectionPage);