import React,{useContext} from 'react'
import {DataContext} from './DataProvider'
import {Link} from 'react-router-dom'

function Products() {
    const [products] = useContext(DataContext).products
    const addCart = useContext(DataContext).addCart
    // console.log(products)
    // (2) [{…}, {…}]0: {_id: "1", title: "product 01", images: Array(3), description: "well", content: "good", …}1: {_id: "2", title: "product 02", images: Array(3), description: "nice", content: "bad", …}length: 2__proto__: Array(0)
    // const isInCart = products.find((product,index)=>{
    //     return !!product._id === id
    // })
    return (
        <div className='products'>
         {
             products.map(product=>(
                <div className='card'>
                        <Link to ={`/products/${product._id}`}>
                        <h4 className='img'>{product.images[0]}</h4>
                        </Link>
               <div className='box'>

                    <h3>
                        <Link to ={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </h3>
                    <p>{product.description}</p>
                    <h4>${product.price}</h4>
                    <span>
                        <Link to ={`/products/${product._id}`}>
                                Details
                        </Link>
                    </span>
                    
                    <button onClick={()=>addCart(product._id)}>Add to cart</button>
                  </div>
              </div>      
           ))
         }
     </div>
    )
}

export default Products
