import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content'

const summarizeCart = (cart)=> {
    const groupedItems = cart.reduce((summary, item)=> {
        summary[item.id] = summary[item.id] || {...item, count: 0}
        summary[item.id].count++
        return summary
    }, {})

    return Object.values(groupedItems)
}



function App() {

    const [cart, setCart]= useState([])
    const [activeTab, setActiveTab] = useState('items')
    function onAddToCart(item) {
        setCart(prevCart => {
            return [...prevCart, item]
        })
    }

    const removeOne = (item) => {
        const index = cart.findIndex(i => i.id === item.id)
        if (index >= 0) {
            setCart(cart => {
                const copyCart = [...cart]
                copyCart.splice(index, 1)
                return copyCart
            })
        }
    }

    return (
        <div className="app">
           
            <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
            <main className='app-content'>
                <Content
                    cart={summarizeCart(cart)}
                    onAddToCart={onAddToCart}
                    tab={activeTab}
                    removeOne={removeOne}
                />
            </main>
           
        </div>
    );
}

export default App;
