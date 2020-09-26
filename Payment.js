import React from 'react'
import {Link} from 'react-router-dom'

function Payment() {
    return (
        <div className="payment_div">
        <span>
            Payment Successfully Received
        </span>
        <h3><Link to='/products'>Buy More</Link></h3>
        </div>
    )
}

export default Payment
