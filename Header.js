import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {BiBasket} from 'react-icons/bi'
import {DataContext} from './DataProvider'

function Header() {
    const [cart]= useContext(DataContext).cart
    return (
        <nav className='nav'>
        <Link to='/products' className='nav_link'>Products</Link>
            <Link to='/cart'>
                <div className='nav_div'>
                    <BiBasket/>
                    <span className='nav_span'>{cart.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
