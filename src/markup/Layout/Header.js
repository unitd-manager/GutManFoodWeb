import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { useSelector } from 'react-redux';
import api from '../../constants/api';  // Ensure you have your API setup
import { getUser } from '../../common/user';

const Header = () => {
	const cartItems = useSelector((state) => state.cartItems.cartItems);
	const wishlistItems = useSelector((state) => state.wishlistItems.wishlistItems);
	const user = getUser();

	const [sections, setSections] = useState([]);
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);
	const [hoveredSectionId, setHoveredSectionId] = useState(null);
	const [hoveredCategoryId, setHoveredCategoryId] = useState(null);

	useEffect(() => {
		// Fetch sections, categories, and subcategories
		api.get("/section/getSectionMenu")
			.then(res => setSections(res.data.data))
			.catch(error => console.error("Error fetching sections:", error));

		api.get("/category/getCategories")
			.then(res => setCategories(res.data.data))
			.catch(error => console.error("Error fetching categories:", error));

		api.get("/subcategory/getSubCategory")
			.then(res => setSubCategories(res.data.data))
			.catch(error => console.error("Error fetching subcategories:", error));
	}, []);

	// Filter categories for a given section
	const getCategoriesForSection = (sectionId) => categories.filter(cat => cat.section_id === sectionId);

	// Filter subcategories for a given category
	const getSubCategoriesForCategory = (categoryId) => subCategories.filter(sub => sub.category_id === categoryId);

	const logout = () => {
		localStorage.clear();
		setTimeout(() => {
			window.location.reload();
		}, 200);
	};

	return (
		<header className="site-header header center mo-left header-style-2">
			<div className="sticky-header main-bar-wraper navbar-expand-lg">
				<div className="main-bar clearfix">
					<div className="container-fluid">
						<div className="logo-header mostion">
							<Link to={'/'}><img src={require('./../../images/logo.png')} alt="logo" /></Link>
						</div>
						<button className="navbar-toggler collapsed navicon" type="button">
							<span></span><span></span><span></span>
						</button>

						<div className="header-nav navbar-collapse myNavbar collapse justify-content-between">
							<ul className="nav navbar-nav nav1">
								{sections.map((section) => (
									<li key={section.id}
										onMouseEnter={() => setHoveredSectionId(section.section_id)}
										onMouseLeave={() => setHoveredSectionId(null)}>
										<Link  to={`/${section.section_title}`}>{section.section_title} <i className="fa fa-chevron-down"></i></Link>
										{hoveredSectionId === section.section_id && getCategoriesForSection(section.section_id).length > 0 && (
    <ul className="sub-menu">
        {getCategoriesForSection(section.section_id).map((category) => (
            <li key={category.category_id}
                onMouseEnter={() => setHoveredCategoryId(category.category_id)}
                onMouseLeave={() => setHoveredCategoryId(null)}
            >
                <Link to={`/${category.category_title}`}>{category.category_title}</Link>
                {hoveredCategoryId === category.category_id && getSubCategoriesForCategory(category.category_id).length > 0 && (
                    <ul className="sub-menu">
                        {getSubCategoriesForCategory(category.category_id).map((subCategory) => (
                            <li key={subCategory.sub_category_id}>
                                <Link to="#">{subCategory.sub_category_title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul>
)}

									</li>
								))}
							</ul>

							<ul className="nav navbar-nav nav2">
								<li>
									<Link to="#"><AiOutlineUser size={20} /></Link>
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
			  <i className="fa fa-right-from-bracket"></i> Logout
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
										<Link to={'/shop'}>Shop </Link>
										{/* <ul className="sub-menu">
											<li><Link to ={'/shop'}>Shop</Link></li>
											<li><Link to ={'/shop-sidebar'}>Shop Sidebar</Link></li>
											
										</ul> */}
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
	top: "35px",
	right: "-8px",
	background: count === 0 ? "red" : "#a020f0",
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
