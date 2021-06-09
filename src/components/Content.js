import React from 'react'
import ItemPage from '../pages/ItemPage'
import { items } from '../data'
import CartPage from '../pages/CartPage'

function Content({tab, onAddToCart, cart, removeOne}) {
    switch(tab) {
        case 'items':
            return <ItemPage items={items} onAddToCart={ onAddToCart}/>
        case 'cart':
            return <CartPage
                items={cart}
                removeOne={removeOne}
                addOne={onAddToCart}
                />
        default:
            return null
    }
}

export default Content
