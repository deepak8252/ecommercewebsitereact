import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({setData,cart}) => {

  const [serachTerm,setSerachTerm]=useState("");
  const[show,setshow]=useState(false);
  const navigate=useNavigate();
  const location=useLocation();
  const filterbycateogery=(category)=>{
   const element=items.filter(product=>product.category===category);
   setData(element)
  }
  const filterbyprice=(price)=>{
    const element=items.filter(product=>product.price>=price);
    setData(element)
   };
   const handleSubmit=(e)=>{
  e.preventDefault();
  navigate(`/search/${serachTerm}`)
   }
   const handleshow=()=>{
    setshow(!show);
    alert("hello")
   }
  return (
    <div className=' sticky top-0 z-10'>
        <header className=' shadow-lg'>
            <div className='nav-bar flex justify-between py-3 bg-blue-900 text-white items-center'>
            {
              location.pathname=="/" &&  
             <>
              <div className=' cursor-pointer py-3 px-3 text-2xl'>
              <GiHamburgerMenu onClick={handleshow}/>
             </div>
             </>
            }
           
              <Link to={"/"} className='brand capitalize font-bold text-2xl text-center w-1/5' onClick={()=>setData(items)}>Ekart</Link>
              <form className='w-3/5 mx-auto text-right' onSubmit={handleSubmit}>
                <input
                 type="text" 
                 placeholder='search products' 
                 className='w-4/6  py-1 mx-auto px-3 text-gray-600'
                 onChange={(e)=>setSerachTerm(e.target.value)}
                 />
              </form>
              <div className='w-1/5 text-center'>
                <Link to={"/cart"} className=' capitalize text-2xl font-bold'>
                <button type="button" className="btn btn-primary position-relative">
  <span className='font-bold text-2xl capitalize'><FaCartArrowDown/></span>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
                </Link>
              </div>
            </div>
            {
              location.pathname=="/" &&  
             <> 
           {
            show &&   <div className=' absolute w-full h-screen left-0'>
            <ul className=' capitalize flex-col sm:gap-4 gap-6  sm:flex-row flex justify-between px-8 bg-violet-900 text-white py-4 font-bold '>
                <li className=' cursor-pointer'>filter by --</li>
                <li className=' cursor-pointer'  onClick={()=>setData(items)}>no filter</li>
                <li className=' cursor-pointer' onClick={()=>filterbycateogery("mobiles")}>mobiles</li>
                <li className=' cursor-pointer' onClick={()=>filterbycateogery("laptops")}>laptops</li>
                <li className=' cursor-pointer' onClick={()=>filterbycateogery("tablets")}>tablets</li>
                <li className=' cursor-pointer' onClick={()=>filterbyprice(29000)}>{">="}29000</li>
                <li onClick={()=>filterbyprice(49000)} className=' cursor-pointer'>{">="}49000</li>
                <li className=' cursor-pointer' onClick={()=>filterbyprice(69000)}>{">="}69000</li>
                <li className=' cursor-pointer' onClick={()=>filterbyprice(89000)}>{">="}89000</li>
            </ul>
        </div>
           }
             </>
             
            }
          
        </header>
    </div>
  )
}

export default Navbar