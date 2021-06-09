import React from 'react'

function Item({ item, children }) {
    const sum = item.price * item.count
    return (
        <div className='item'>
            <div className="item-left">
                <div className="item-image" />
                <div className="item-title">{item.name}</div>
                <div className="item-description">{item.description}</div>
            </div>
            <div className="item-right">
                <div className="item-price">${sum}</div>
                {children}
            </div>
        </div>
    )
}

export default Item
