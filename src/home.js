import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbFilePercent } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";
import Homeproduct from './homeproducts';
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import './home.css'
const Home = ({detail, view, close, setClose,addtocart}) => {
 
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias dolore quia hic animi velit, facilis, beatae repellat similique, quas unde reprehenderit. Fuga consequatur officia ut at quod exercitationem fugiat.</p>
                                <h3>{curElm.Price} đ</h3>
                                <button>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    )
                })
            }
                <div className="productbox"></div>
            </div>
        </div> : null

        }
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>Bộ Sưu Tập Nổi Bật Nhất 2023</h2>
                
                            <Link to='/products' className='link'>Đến Shop <GoArrowRight/> </Link>
                        
                    </div>
                    <div className="img_box">
                        <img src="./img/slide-1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="img_box">
                            <img src="./img/slide-1.png" alt="" />
                        </div>
                        <div className="detail">
                         <p> 23 sản phẩm</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src="./img/slide-1.png" alt="" />
                        </div>
                        <div className="detail">
                           <p> 23 sản phẩm</p>
                        </div>

                    </div>


                    <div className="box">
                        <div className="img_box">
                            <img src="./img/slide-1.png" alt="" />
                        </div>
                        <div className="detail">
                           <p>23 sản phẩm</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="img_box">
                            <img src="./img/slide-1.png" alt="" />
                        </div>
                        <div className="detail">
                        <p>23 sản phẩm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <CiDeliveryTruck/>
                        </div>
                        <div className="detail">
                            <h3>Miễn phí Ship</h3>
                            <p>Đơn hàng trên 1.000.000đ</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <BsCurrencyDollar/>
                        </div>
                        <div className="detail">
                            <h3>Hoàn lại phí</h3>
                            <p>Đảm bảo hoàn phí</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <TbFilePercent/>
                           
                        </div>
                        <div className="detail">
                            <h3>Giảm giá thành viên</h3>
                            <p>Cho mỗi đơn đặt</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <FaHeadphonesAlt/>
                           
                        </div>
                        <div className="detail">
                            <h3>Chăm sóc khách</h3>
                            <p>Mỗi lần gọi hỗ trợ</p>
                        </div>
                    </div>


                </div>
            </div>


            <div className="product">
            <h2>Top Sản phẩm</h2>
                <div className="container">
                {
                    Homeproduct.map((curElm)=>{
                        return(
                           
                                <div className="box" key={curElm.id}>
                                    <div className="img_box">
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                        <div className="icon">
                                        <li onClick={() => addtocart (curElm)}>
                                        <IoCartOutline/>
                                        </li>
                                           <li  onClick={() => view (curElm)}>
                                           <FaRegEye/>
                                           </li>
                                            
                                            <li>
                                            <FaRegHeart/>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>${curElm.Price}</h4>
                                    </div>
                                </div>
                            
                        )
                    }
                    )
                }
                    
                </div>
            </div>
            <div className="banner">
                <div className="container">
                <div className="detail">
                    <h4>Công nghệ mới nhất được thêm</h4>
                    <h3>Apple Smarthwatch 10.2 9th Gen-2023</h3>
                    <p> <GiMoneyStack/> 999</p>
                    <Link to='/products' className='link'>Shop now <GoArrowRight/> </Link>
                </div>
                <div className="img_box">
                    <img src="./img/slide-1.png" alt="" />
                </div>
                </div>
            </div>
        </>
    );
};

export default Home;