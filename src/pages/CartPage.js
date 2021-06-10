import React from 'react'
import Item from "../components/Item"

function CartPage({ items, removeOne, addOne }) {
    const total = items.reduce((sum, eachItem) => {
        return sum + eachItem.price * eachItem.count
    }, 0)
    return (
        <ul className='cartPage-items'>
            {items.map((item) => {
                return <li className='cartPage-item' key={item.id}>
                    <Item item={item}>
                        <div className='cartItem-controls'>
                            <div className="item-price">${}</div>
                            <button onClick={() => {
                                removeOne(item)
                            }} className='cartItem-removeOne'>
                                &ndash;
                            </button>
                            <span className='countItem-count'>{item.count}</span>
                            <button onClick={() => {
                                addOne(item)
                            }} className='cartItem-addOne'>
                                +
                            </button>
                        </div>
                    </Item>
                </li> 
            })}
            <li>
                Total: ${total.toFixed(2)}
            </li>
        </ul>

    )
}

export default CartPage
