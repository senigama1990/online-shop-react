import React from 'react'
import Item from '../components/Item'

function ItemPage({ items, onAddToCart }) {
    return (
        <ul className='itemPage-items'>
            {items.map((item) => {
                return (
                    <li key={item.id} className='itemPage-item'>
                        {/* <Item item={item} addToCart={ ()=> onAddToCart(item)}/> */}
                        <Item item={item}>
                            <button className="item-addToCart" onClick={() => onAddToCart(item)}>
                                Add to Cart
                            </button>
                        </Item>
                    </li>
                )
            })}
        </ul>

    )
}

export default ItemPage
