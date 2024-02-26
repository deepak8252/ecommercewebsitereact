import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { items } from "./Data";
const Product = ({items,cart,setCart}) => {
    if (!Array.isArray(items)) {
        return null; // or handle the error in some way
      }
      const addToCart=(id,title,imgSrc,description,price)=>{
       const obj={
        id,title,imgSrc,description,price
       }
       setCart([...cart, obj]);
       console.log(cart);
       toast.success('🦄 item added on cart !', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      }
  return (
    
    <div>
      <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container w-4/5 text-center -z-10">
        <div className="row mx-auto">
          { items.map((item) => (
            <>
              <div className="col-lg-4 col-md-6 my-3 mx-auto " key={item.id}>
                <Card style={{ width: "18rem" }} className="py-4 shadow-2xl h-full">
                  <Link to={`/product/${item.id}`} className="flex justify-center items-center">
                    <Card.Img variant="top" src={item.imgSrc} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button
                      variant="warning"
                      className=" mr-2 my-2 bg-orange-500 text-white"
                    >
                      {item.price} ₹
                    </Button>
                    <Button onClick={()=>addToCart(item.id,item.title,item.imgSrc,item.description,item.price)} variant="primary " className=" bg-blue-600">Add to cart</Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
