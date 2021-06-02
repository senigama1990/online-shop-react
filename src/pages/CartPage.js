import React from 'react'
import Item from "../components/Item"

function CartPage({items}) {
    return (
        <ul className='cartPage-items'>
            {items.map((item) => {
                return <li className='cartPage-item' key={item.id}><Item item={ item}/></li>
            })}
        </ul>
    )
}

export default CartPage
