import React,{useContext} from 'react'

import { DataContext } from './DataProvider';

function TotalItems() {
    const [cart] = useContext(DataContext).cart
    let itemCount = cart.reduce((total, cart) => total + cart.count, 0);
    console.log(cart)
    return (
        <div>
            <h3>Total Items:{itemCount}</h3>
        </div>
    )
}

export default TotalItems
