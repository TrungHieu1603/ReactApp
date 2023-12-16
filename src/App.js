import React,{useState} from 'react';
import Nav from './nav';
import { BrowserRouter } from 'react-router-dom';
import Ro from './ro';
import Footer from './footer';
import Productdetail from './productdetail';



const App = () => {
  //add to cart
  const [cart, setCart] = useState([])
  //product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => {

    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }

  //product detail
  const view  = (product) => {
    setDetail([{...product}])
    setClose(true)
  }
  

  const addtocart = (product) =>{
    const exsit = cart.find((x) => {
      return x.id ===  product.id
    })
    if(exsit){
      alert("Sản phẩm này đã có sẵn trong giỏ hàng")
    }else{
      setCart([...cart, {...product, qty:1}])
      alert("Sản phẩm được thêm vào giỏ hàng")
    }

  }
  return (
    <>
   <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Ro product={product}  setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>

      <Footer/>
   </BrowserRouter>
   
    </>
  );
};

export default App;