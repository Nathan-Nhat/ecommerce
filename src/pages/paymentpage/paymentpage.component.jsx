import React from 'react';
import {withRouter} from 'react-router-dom'
const Paymentpage = ({location}) => {
    console.log(location)
    if (!location.state)
    {
        return (
            <div>
               Please chose the product
            </div>
        )
    }
    else {
        return (
            <div>
            <div className = 'collection-item'>
                    <div className = 'view'>
                        <div className = 'image' style = {{
                        backgroundImage : `url(${location.state.imageUrl})`
                        }}></div>
                    </div>
                    <div className = 'collection-footer'>
                        <span className = 'name'>{location.state.name}</span>
                        <span className = 'price'>{location.state.price}</span>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Paymentpage);