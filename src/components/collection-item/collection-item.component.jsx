import React from 'react';
import {withRouter} from 'react-router-dom'
import './collection-item.style.scss'
const CollectionItem = ({name, imageUrl, price, history}) => {
    const onHandleAddtoCard = ()=>{
        history.push('/payment',{name, imageUrl, price});
    }

    return (
        <div className = 'collection-item'>
            <div className = 'view'>
                <div className = 'image' style = {{
                backgroundImage : `url(${imageUrl})`
                }}></div>
                <div className = 'btnAddToCard' onClick = {onHandleAddtoCard}> ADD TO CARD </div>
            </div>
            <div className = 'collection-footer'>
                <span className = 'name'>{name}</span>
                <span className = 'price'>{price}</span>
            </div>
        </div>
    );
};

export default withRouter(CollectionItem);