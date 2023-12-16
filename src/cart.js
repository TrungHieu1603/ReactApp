import React from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ({cart,setCart}) => {
    const incqty = (product)  => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) =>{
            return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
        }))
    }
    const decqty = (product)  => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) =>{
            return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
        }))
    }

    const removeproduct = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        if(exsit.qty > 0){
            setCart(cart.filter((x) =>  {
                return x.id !== product.id
            }))
        }
    }

    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    return (
        <>
        <div className="cartcontainer">
        {
            cart.length === 0 &&  
            <div className="emptycart">
            <h2 className="empty">Giỏ hàng trống</h2>
            <Link to='/products' className='emptycartbtn'>Đến Shop</Link>
            </div>
           
        }
            <div className="contant">
            {
                cart.map((curElm)  =>{
                    return (
                        <div className="cart_item" key={curElm.id}>
                            <div className="img_box">
                                <img src={curElm.Img} alt={curElm.Title} ></img>

                            </div>
                            <div className="detail">
                            <div className="info">
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Giá: {curElm.Price}đ</p>
                                <div className="qty">
                                    <button onClick={() => incqty(curElm)} className="incqty">+</button>
                                   <input type="text" value={curElm.qty}></input>
                                   <button onClick={() => decqty(curElm)} className="decqty">-</button>
                                </div>
                                
                                <h4 className='subtotal'>Tổng cộng: {curElm.Price * curElm.qty}đ</h4>
                                </div>
                                <div className="close">
                                <button onClick={()  => removeproduct(curElm)}><IoClose/></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
                
            </div>{
            cart.length > 0  &&
            <>
             <h2 className="totalprice">Tổng cộng: $ {Totalprice} </h2>
             <button className='checkout'>Thanh toán</button>
             </>
            }
           
        </div>
        </>
    );
};

export default Cart;