import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  return (
    <>
    <div className="container">
      {
        cart.length==0?(
          <div className='text-center'>
            <h2 className='text-center capitalize font-bold my-4 text-3xl'>cart is empty !!</h2>
            <Link to={'/'} className='bg-orange-500 shadow-2xl py-2 px-4 text-light capitalize font-semibold rounded-lg'>please continue shopping</Link>
          </div>
        ):
        cart.map((item)=>(
          <>
            <div className="card mb-3 w-full sm:w-1/2 mx-auto shadow-lg " >
  <div className=" g-0 flex items-center flex-col sm:flex-row justify-center  ">
    <div className="col-md-4">
      <img src={item.imgSrc} className="img-fluid rounded-start sm:w-full w-56" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body  ">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text"></p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <div>
        <button className='bg-green-500 m-2  shadow-lg py-2 px-4 text-light capitalize font-semibold rounded-lg'>{item.price}{" "}Rs</button>
        <button className='bg-orange-500 shadow-2xl py-2 px-4 text-light capitalize font-semibold rounded-lg'>buy now</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </>
        ))
      }
  
    </div>
   {
    cart.length==0?(
      <>
      
      </>
    ) 
    : <div className='container text-center mt-4'>
    <button className='bg-orange-500 shadow-2xl py-2 px-4 text-light capitalize font-semibold rounded-lg m-2'>check out</button>
    <button className='bg-red-500 shadow-2xl py-2 px-4 text-light capitalize font-semibold rounded-lg' onClick={()=>setCart("")}>clear cart</button>
    </div>
   }
    </>
  )
}

export default Cart