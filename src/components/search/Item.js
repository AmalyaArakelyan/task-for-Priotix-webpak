import React from 'react';
import {IMAGE} from '../../config/config.json'
//icons
import check from '../../assets/icons/check.png'
import noCheck from '../../assets/icons/delete.png'
import PropTypes from "prop-types";

export default function Item(props) {
    const {item, added, deleteItem} = props
    
    return (
        <div className="item">
            {item.images ?<div className="image">
                <img alt={item.title} src={`${IMAGE}${item.images.square?  item.images.square.filePath: item.images.banner ? item.images.banner.filePath : ''}`} />
            </div>
             :null
            }
            <div className="info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
            {added? <div className="added">
                    <img src={check} alt='added'/>
                </div>
                :null
            }
            {deleteItem?
                <div className="added" onClick={() => deleteItem(item.id)}>
                    <img src={noCheck} alt="remove"/>
                </div>
                :null
            }
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.object,
    added: PropTypes.bool,
    deleted: PropTypes.func,
};
