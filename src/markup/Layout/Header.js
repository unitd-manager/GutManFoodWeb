import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineLogout, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { getUser } from '../../common/user';
import { BsBox } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Header = () => {
	
	const cartItems = useSelector((state) => state.cartItems.cartItems);
	const wishlistItems=useSelector(state=>state.wishlistItems.wishlistItems);
	  const user = getUser();
	 
	const logout=()=>{
		localStorage.clear()
		setTimeout(()=>{
		  window.location.reload()
		},200)
	  }
    useEffect(() => {
        // sidebar open/close
        const btn = document.querySelector('.navicon');
        const aaa = document.querySelector('.myNavbar');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);

        // Sidenav li open close
        const navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }

        navUl.forEach(item => {
            item.addEventListener('click', () => checkLi(item));
        });

        // Cleanup
        return () => {
            btn.removeEventListener('click', toggleFunc);
            navUl.forEach(item => {
                item.removeEventListener('click', () => checkLi(item));
            });
        };
    }, []);

    return (
			<header className="site-header header center mo-left header-style-2">
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix">
						<div className="container-fluid">
							<div className="logo-header mostion">
								<Link to={'/'} className="dez-page"><img src={require('./../../images/logo.png')} alt="" /></Link>
							</div>
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
							
							<div className="header-nav navbar-collapse navbar myNavbar collapse justify-content-between" id="navbarNavDropdown">
								<div className="logo-header mostion d-lg-none">
									<Link to={'/'} className="dez-page"><img src={require("./../../images/logo.png")} alt="" /></Link>
								</div>
                            <ul className="nav navbar-nav nav1">
                                <li>
                                    <Link to={''}>Home<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={'/'}>Home 01</Link></li>
											<li><Link to={'/index-2'}>Home 02</Link></li>
										</ul>
									</li>
                                <li>
                                    <Link to={''}>Pages<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to={'/about-1'}>About Us</Link></li>
											<li><Link to={'/our-services'}>Our Services</Link></li>
											<li><Link to={'./faq'}>FAQs</Link></li>
											<li><Link to={'./booking'}>Booking</Link></li>
											<li><Link to={'./error-404'}>404 Error</Link></li>
											<li><Link to={'/calendar'}>Calendar</Link></li>
											<li><Link to={'/team'}>Team</Link></li>
										</ul>
									</li>
                                <li>
                                    <Link to={''}>Our Menu<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to ={'/our-menu-1'}>Menu Style 1</Link></li>
											<li><Link to ={'/our-menu-2'}>Menu Style 2</Link></li>
											<li><Link to ={'/our-menu-3'}>Menu Style 3</Link></li>
											<li><Link to ={'/our-menu-4'}>Menu Style 4</Link></li>
										</ul>
									</li>
								</ul>
								<ul className="nav navbar-nav nav2">
                                {/* <li className="has-mega-menu">
                                    <Link to={''}>Blog<i className="fa fa-chevron-down"></i></Link>
										<ul className="mega-menu">
                                        <li>
                                            <Link to={''}>Blog Grid</Link>
												<ul>
													<li><Link to = {'/blog-grid-2'}>Grid 2</Link></li>
													<li><Link to = {'/blog-grid-2-sidebar'}>Grid 2 sidebar</Link></li>
													<li><Link to = {'/blog-grid-2-sidebar-left'}>Grid 2 sidebar left</Link></li>
													<li><Link to = {'/blog-grid-3'}>Grid 3</Link></li>
												</ul>
											</li>
                                        <li>
                                            <Link to={''}>Blog Half Image</Link>
												<ul>
													<li><Link to = {'/blog-half-img'}>Half image</Link></li>
													<li><Link to = {'/blog-half-img-sidebar'}>Half image sidebar</Link></li>
													<li><Link to = {'/blog-half-img-left-sidebar'}>Half image sidebar left</Link></li>
												</ul>
											</li>
                                        <li>
                                            <Link to={''}>Blog Large Image</Link>
												<ul>
													<li><Link to ={'/blog-large-img'}>Large image</Link></li>
													<li><Link to ={'/blog-large-img-sidebar'}>Large image sidebar</Link></li>
													<li><Link to ={'/blog-large-img-left-sidebar'}>Large image sidebar left</Link></li>
												</ul>
											</li>
                                        <li>
                                            <Link to={''}>Blog Details</Link>
												<ul>
													<li><Link to ={'/blog-single'}>Single</Link></li>
													<li><Link to ={'/blog-single-sidebar'}>Single sidebar</Link></li>
													<li><Link to ={'/blog-single-left-sidebar'}>Single sidebar left</Link></li>
												</ul>
											</li>
										</ul>
									</li> */}
									<li>
										<Link to={''}> <AiOutlineUser size={20} /></Link>
										<ul className="sub-menu">
										{user ? (
          <>
            <li>
              <Link to="/shop-Orders">
			  <i className="fa fa-box"></i> My Orders
              </Link>
            </li>
            <li>
			<Link to={''}>
              <button onClick={logout} style={{ background: "none", border: "none", cursor: "pointer" }}>
			  <i className="fa fa-right-from-bracket"></i> LOGOUT
              </button>
			  </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={'/shop-login'}>
                <BiLogIn size={20} title="Login" /> Sign In
              </Link>
            </li>
            <li>
              <Link to={'/shop-register'}>
                <MdOutlineAppRegistration size={22} title="Register" /> Register
              </Link>
            </li>
          </>
        )}
										</ul>
										
									</li>
									<li>
										<Link to={''}>Shop <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to ={'/shop'}>Shop</Link></li>
											<li><Link to ={'/shop-sidebar'}>Shop Sidebar</Link></li>
											
										</ul>
									</li>
									<li>
										<Link to={'/shop-cart'}><AiOutlineShoppingCart size={22} /> <span style={getBadgeStyle(cartItems.length)}>{cartItems.length}</span> </Link>
									</li>
									<li>
										<Link to={'/shop-wishlist'}><AiOutlineHeart size={22} /><span style={getBadgeStyle(wishlistItems.length)} >{wishlistItems.length}
          </span></Link>
									</li>
                                {/* <li>
                                    <Link to={''}>Contact Us <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu left">
											<li><Link to={'/contact-1'}>Contact Us 1</Link></li>
											<li><Link to={'/contact-2'}>Contact Us 2</Link></li>
										</ul>
									</li> */}
								</ul>		
							</div>
						</div>
					</div>
				</div>
			</header>	
    );
}
const getBadgeStyle = (count) => ({
	position: "absolute",
	top: "35px",   // Moves it closer to the icon
	right: "-8px",  // Adjusts horizontal position
	background: count === 0 ? "red" : "#05d3b1",
	color: "white",
	fontSize: "12px",
	fontWeight: "bold",
	borderRadius: "50%",
	padding: "3px 6px",
	minWidth: "18px",
	height: "18px",
	lineHeight: "16px",
	textAlign: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});
  
export default Header;
