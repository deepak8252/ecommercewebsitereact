import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
const SearchItem = ({cart,setCart}) => {
  const {term}=useParams();
  const [filterData,setFilterData]=useState([]);
useEffect(()=>{
 const filteredData=()=>{
  const data=items.filter((item)=>item.title.toLowerCase().includes(term.toLowerCase()));
  setFilterData(data);
  console.log(data)
 }
filteredData()
},[term])
  return (
    <div>
      <Product cart={cart} setCart={setCart} items={filterData}/>
    </div>
  )
}

export default SearchItem