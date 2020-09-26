import React,{useContext,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {BiTrash} from 'react-icons/bi'
import TotalItems from './TotalItems'
import { DataContext } from './DataProvider';

function Details() {
    const [cart,setCart] = useContext(DataContext).cart
    const [total,setTotal]=useState(0)
    // get total amount in cart
     useEffect(()=>{
         const getTotal=()=>{
             const res = cart.reduce((prev,item)=>{
                 return prev+(item.price*item.count)
             },0)
             setTotal(res)
         }
         getTotal()
     },[cart])
    if(cart.length===0)
    {
        return <h3>Shopping Cart Empty</h3>
    }
    //  reduce each item(id) on click 
    const minusButton = id=>{
        cart.forEach(item=>{
            if(item._id===id){
                item.count === 1 ? item.count=1 : item.count-=1;
            }
        })
        setCart([...cart])
    }
    //  reduce each item(id) on click 
    const plusButton = id=>{
        cart.forEach(item=>{
            if(item._id===id){
                item.count+=1;
            }
        })
        setCart([...cart])
    }
    const removeProduct=id=>{
        if (window.confirm("Are you sure you want to delete this product?")){
            cart.forEach((item,index)=>{
            if(item._id===id){
                cart.splice(index,1)
            }
            })
            setCart([...cart])
        }
    }
    return (
        <>
        {
            cart.map(product=>(
                <div className='card'>
                        <Link to ={`/products/${product._id}`}>
                        <h4 className='img' >
                                {product.images[0]}
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
                    <h3>Price:{product.price}</h3>
                    <div>
                        <button className='count' onClick={()=>plusButton(product._id)}>+</button>
                        <span>{product.count}</span>
                        {
                     product.count> 1 ?
                     <button
                    onClick={()=>minusButton(product._id)}>
                        -
                    </button>
                      :
                     <button
                    onClick={()=>removeProduct(product._id)}>
                        <BiTrash width={"20px"}/>
                    </button>
                 }
                 
                    </div>
                 </div>
              </div>  
            ))
        }
        {<div className='total'>
            <Link to='/payment'>Payment</Link>
            <h3>Total Price:${total}</h3>
            <TotalItems/>
        </div>}
        </>
    )
}

export default Details
