import React,{useState,createContext,useEffect} from 'react'
import{dummyProducts} from './dummyProducts'

export const DataContext = createContext();
export const DataProvider = (props) =>{
    const [products,setProducts] = useState(dummyProducts)

    const [cart,setCart] = useState([])
    const addCart = (id)=>{
        const check = cart.every(item=>{
          return item._id !== id
        })
        if(check){
          const data = products.filter(product=>{
            return product._id === id
          })
          setCart([...cart,...data])
        }
        else{
          alert("the product is already added to the cart")
        }
      }
      useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
      },[])
      useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
      },[cart])
      const  value={
        products:[products,setProducts],
        cart:[cart,setCart],
        addCart: addCart
      }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider

