import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState({});
  useEffect(() => {
    const filterproduct = items.filter((item) => item.id == id);
    setProduct(filterproduct[0]);
    const relatedProducts = items.filter(
      (item) => item.category == product.category
    );
    setRelatedProduct(relatedProducts);
  }, [id, product.category]);
  const addToCart = (id, title, imgSrc, description, price) => {
    const obj = {
      id,
      title,
      imgSrc,
      description,
      price,
    };
    setCart([...cart, obj]);
    console.log(cart);
    toast.success("🦄 item added on cart !", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
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
      <div className="container mb-5">
        <div className=" flex flex-row items-center justify-center flex-wrap ">
          <div className=" flex justify-center items-center">
            <img src={product.imgSrc} alt="" className=" w-80 h-80" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1>{product.title}</h1>

            <p>{product.description}</p>
            <div>
              <Button
                variant="warning"
                className=" mr-2 my-2 bg-orange-500 text-white"
              >
                {product.price} ₹
              </Button>
              <Button
                onClick={() =>
                  addToCart(
                    product.id,
                    product.title,
                    product.imgSrc,
                    product.description,
                    product.price
                  )
                }
                variant="primary "
                className=" bg-blue-600"
              >
                Add to cart 
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" capitalize text-center text-2xl font-bold">
        related product
      </h1>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  );
};

export default ProductDetail;
