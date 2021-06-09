import React from 'react'
import Item from "../components/Item"

function CartPage({ items, removeOne, addOne }) {
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

        </ul>

    )
}

export default CartPage
