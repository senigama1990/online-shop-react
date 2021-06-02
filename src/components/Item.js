import React from 'react'

function Item({ item, addToCart }) {
    return (
        <div className='item'>
            <div className="item-left">
                <div className="item-image" />
                <div className="item-title">{item.name}</div>
                <div className="item-description">{item.description}</div>
            </div>
            <div className="item-right">
                <div className="item-price">${item.price}</div>
                <button onClick={addToCart} className='item-addToCart'>Add to cart</button>
            </div>
        </div>
    )
}

export default Item
