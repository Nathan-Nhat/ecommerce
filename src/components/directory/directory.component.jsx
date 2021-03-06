import React, { Component } from 'react'
import MenuItem from "../meni-item/menu-item.component"
import './directory.style.scss'
export default class Directory extends Component {
    constructor(){
        super();
        this.state = {
            section : [
                {
                    title : 'hats',
                    imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
                    id : 1,
                    linkUrl :'hats'
                },
                {
                    title : 'jackets',
                    imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
                    id : 2,
                    linkUrl :'jackets'

                },
                {
                    title : 'snakers',
                    imageUrl : 'https://i.ibb.co/0jqHpnp/hats.png',
                    id : 3,
                    linkUrl :'snakers'
                },
                { 
                    title : 'womens',
                    imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                    size : 'large',
                    id : 4,
                    linkUrl :'womens'
                },
                {
                    title : 'mens',
                    imageUrl : 'https://i.ibb.co/R70vBrQ/mens.png',
                    size : 'large',
                    id : 5,
                    linkUrl :'mens'
                }
            ]
        }
    }
    render() {
        return (
                 <div className = "directory-menu">
                    {
                        this.state.section.map(({id, ...otherSectionProps}) =>
                            <MenuItem key = {id} {...otherSectionProps}/>
                        )
                    }
            </div>
        )
    }
}
