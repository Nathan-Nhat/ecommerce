import React from 'react';
import NavItem from '../../NavItem/NavItemcomponent';

const NavBar = () => {
    const MenuItem = [
        {
            id : 1,
            name : "Shop",
            url : '/shop'
        }
    ];
    return (
        <div>
            {MenuItem.map((item)=>{
                return (
                    <NavItem key = {item.id} name = {item.name}
                            url = {item.url}/>
                )
            })}
        </div>
    );
};

export default NavBar;