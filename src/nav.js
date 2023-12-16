import React, { useState } from 'react';
import { FaTruck } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import "./nav.css"
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
    return (
        <>
            <div className="free">
            
            <div className="icon">
            <FaTruck />
            </div>
            <p>
          MIỄN PHÍ ship lên đến 100.000đ
            </p>
            </div>
            <div className="main_header">
                <div className="container">
                    <div className="logo">
                        <img src="./img/logo.png" alt="" />
                    </div>
                    <div className="search-box">
                        <input type="text" value={search} placeholder='Tìm kiếm sản phẩm...' autoComplete='off' onChange={(e)=> setSearch(e.target.value)}/>
                        <button  onClick={() => searchbtn(search)}>Tìm kiếm</button>
                    </div>
                    <div className="icon">
                    
                       
                    <div className="account">
                    <div className="user-icon">
                    <FaRegUser/>
                    </div>
                    <p>Xin chào, users </p>
                        
                    </div>
                     
                    
                    
                    <div className="second-icon">
                    <Link to="/"  className='link'><CiHeart/></Link>
                    <Link to="/cart"  className='link'><IoBagCheckOutline/></Link>
             
                    </div>
                       
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="container">
                <div className="nav">
                <ul>
                        <li>
                            <Link to="/" className='link'>Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/products" className='link'>Sản phẩm</Link>
                        </li>
                        <li>
                            <Link to="/about" className='link'>Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='link'>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                   
                    <div className="auth">
                    {
                        isAuthenticated ?
                        <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                    :
                    <button onClick={()=>loginWithRedirect()}><CiLogin/></button>
                    
                    }
                    
                    
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;