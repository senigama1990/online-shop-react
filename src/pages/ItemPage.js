import React from 'react'
import Item from '../components/Item'

function ItemPage({ items, onAddToCart }) {
    return (
        <ul className='itemPage-items'>
            {items.map((item) => {
                return (
                    <li key={item.id} className='itemPage-item'>
                        <Item item={item} addToCart={ ()=> onAddToCart(item)}/>
                    </li>
                )
            })}
        </ul>

    )
}

export default ItemPage
