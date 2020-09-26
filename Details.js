import React,{useContext,useState,useRef} from 'react'
import {useParams,Link} from 'react-router-dom'
import { DataContext } from './DataProvider';

function Details() {
    const [products]= useContext(DataContext).products
    const addCart = useContext(DataContext).addCart
    const [index,setIndex] =useState(0)
    const {id} = useParams();
    const productDetails = products.filter((product,index)=>{
        return product._id === id
    })
    const imgDiv = useRef()
    const handleMouseMove = e=>{
        const {left,top,width,height} =e.target.getBoundingClientRect()
        const x= (e.pageX -left)/width*100
        const y= (e.pageY -top)/height*100
        imgDiv.current.style.backgroundPosition=`${x}% ${y}`}
    return (
        <>
        {
            productDetails.map(product=>(
                <div className='card'>
                        <Link to ={`/products/${product._id}`}>
                        <h4 className='img' 
                                onMouseMove={handleMouseMove}
                                ref={imgDiv}
                                onMouseLeave={()=>imgDiv.current.style.backgroundPosition=`center`}
                                >
                                {product.images[index]}
                        </h4>
                        </Link>
               <div className='box'>

                    <h3>
                        <Link to ={`/products/${product._id}`}>
                            {product.title}
                        </Link>
                    </h3>
                    <div className='sizes'>
                        {
                            product.sizes.map((size,i)=>(
                             <span>SIZES:{size}</span>
                        ))}
                    </div>
                    <p>{product.description}</p>
                    <p>{product.content}</p>
                    <div className='thumb'>
                        {
                          product.images.map((img,index)=>(
                              <span onClick={()=>setIndex(index)}>{img}</span>
                          ))
                        }
                    </div>
                    <h4>${product.price}</h4>
                    <span>
                        <Link to ='/payment'>
                                BUY NOW
                        </Link>
                    </span>
                    
                    <button onClick={()=>addCart(product._id)}>Add to cart</button>
                  </div>
              </div>  
            ))
        }
        </>
    )
}

export default Details
