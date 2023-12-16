import React from 'react';
import Productdetail from './productdetail';
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";


import './product.css'
const Product = ({product, setProduct, detail, view, close, setClose,addtocart}) => {
 
    
    const filtterproduct = (product) =>
    {
        const update = Productdetail.filter((x)  =>
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => {
        setProduct(Productdetail)
    }
    return (
      
        <>
        {
            close ?
            
        <div className="product_detail">
            <div className="container">
            <button onClick={() => setClose(false)} className='closebtn'> <IoIosCloseCircleOutline/> </button>
            {
                detail.map((curElm) => {
                    return (
                        <div className="productbox">
                            <div className="img-box">
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className="detail">
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum dolore quaerat! Autem eveniet doloremque nam quo</p>
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
                <div className="productbox"></div>
            </div>
        </div> : null

        }
           
            <div className="products">
            <h2> # Sản phẩm</h2>
            <p>Trang chủ . Sản phẩm</p>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                        <h3 className='category'>Thể loại</h3>
                            <ul className='allproduct'>
                            <li  onClick={() => AllProducts ()}>Tất cả loại</li>
                                <li onClick={() => filtterproduct ("Tablet")}>Tablet</li>
                                <li onClick={() => filtterproduct ("Smartwatch")}>Smartwatch</li>
                                <li onClick={() => filtterproduct ("Laptop")}>Laptop</li>
                                <li  onClick={() => filtterproduct ("Telephone")}>Telephone</li>
                            </ul>
                        </div>
                    </div>

                    <div className="productbox">
                        <div className="contant">
                            {
                                product.map((curElm) => {
                                    return(
                           <>
                           <div className="box" key={curElm.id}>
                               <div className="img_box">
                                   <img src={curElm.Img} alt={curElm.Title}></img>
                                   <div className="icon">
                                   <li onClick={() => addtocart (curElm)}><IoCartOutline/></li>
                                    <li onClick={() => view (curElm)}><FaRegEye/></li>
                                    <li><FaRegHeart/></li>
                                   </div>
                               </div>
                               <div className="detail">
                                   <p>{curElm.Cat}</p>
                                   <h3>{curElm.Title}</h3>
                                   <h4>${curElm.Price}</h4>
                               </div>
                           </div>
                           </>
                           )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;