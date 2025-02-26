import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineAppRegistration } from "react-icons/md";
import { useSelector } from "react-redux";
import api from "../../constants/api"; // Ensure you have your API setup
import { getUser } from "../../common/user";
import Swal from "sweetalert2";
import "../../css/pagination.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const wishlistItems = useSelector(
    (state) => state.wishlistItems.wishlistItems
  );
  const user = getUser();

  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [hoveredSectionId, setHoveredSectionId] = useState(null);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
console.log('usermenuopen',userMenuOpen);
  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };
  
  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

const toggleUserMenu = () => {
  setIsUserMenuOpen(!isUserMenuOpen);
};
  useEffect(() => {
    // Fetch sections, categories, and subcategories
    api
      .get("/section/getSectionMenu")
      .then((res) => setSections(res.data.data))
      .catch((error) => console.error("Error fetching sections:", error));

    api
      .get("/category/getCategories")
      .then((res) => setCategories(res.data.data))
      .catch((error) => console.error("Error fetching categories:", error));

    api
      .get("/subcategory/getSubCategory")
      .then((res) => setSubCategories(res.data.data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  // Filter categories for a given section
  const getCategoriesForSection = (sectionId) =>
    categories.filter((cat) => cat.section_id === sectionId);

  // Filter subcategories for a given category
  const getSubCategoriesForCategory = (categoryId) =>
    subCategories.filter((sub) => sub.category_id === categoryId);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobileView();
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 200);
      }
    });
  };

  return (
    <header className="site-header header center mo-left header-style-2">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container">
            <div className="logo-header mostion">
              <Link to={"/"}>
                <img src={require("./../../images/logos.png")} alt="logo" />
              </Link>
            </div>
            <button 
  className={`navbar-toggler navicon ${isMenuOpen ? "open" : ""}`} 
  type="button" 
  onClick={toggleMenu}
>
  <span></span>
  <span></span>
  <span></span>
</button>
              
<div className={`header-nav navbar-collapse myNavbar ${isMenuOpen ? "show" : "collapse"} justify-content-between`}>
            {/* <div className="header-nav navbar-collapse myNavbar collapse justify-content-between"> */}
              <ul className="nav navbar-nav nav1">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    onMouseEnter={() => setHoveredSectionId(section.section_id)}
                    onMouseLeave={() => setHoveredSectionId(null)}
                  >
                    <NavLink
                      activeClassName="active-menu"
                      to={`/${section.section_title}`}
                      onClick={() => toggleSection(section.section_id)} 
                    >
                      <span className="nav-icon">{section.section_title} </span>
                      {/* <i className="fa fa-chevron-down"></i> */}
                    </NavLink>
                    {openSection === section.section_id && getCategoriesForSection(section.section_id).length > 0 && (
      <ul className="sub-menu">
        {getCategoriesForSection(section.section_id).map((category) => (
          <li key={category.category_id}>
            <Link
              to={`/${category.category_title}`}
              onClick={() => toggleCategory(category.category_id)}
            >
              {category.category_title}
            </Link>

            {openCategory === category.category_id && getSubCategoriesForCategory(category.category_id).length > 0 && (
              <ul className="sub-menu">
                {getSubCategoriesForCategory(category.category_id).map((subCategory) => (
                  <li key={subCategory.sub_category_id}>
                    <Link to="#">
                      {subCategory.sub_category_title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    )}
                  {hoveredSectionId === section.section_id &&
                      getCategoriesForSection(section.section_id).length >
                        0 && (
                        <ul className="sub-menu">
                          {getCategoriesForSection(section.section_id).map(
                            (category) => (
                              <li
                                key={category.category_id}
                                onMouseEnter={() =>
                                  setHoveredCategoryId(category.category_id)
                                }
                                onMouseLeave={() => setHoveredCategoryId(null)}
                              >
                                <Link to={`/${category.category_title}`}>
                                  {category.category_title}
                                </Link>
                                {hoveredCategoryId === category.category_id &&
                                  getSubCategoriesForCategory(
                                    category.category_id
                                  ).length > 0 && (
                                    <ul className="sub-menu">
                                      {getSubCategoriesForCategory(
                                        category.category_id
                                      ).map((subCategory) => (
                                        <li key={subCategory.sub_category_id}>
                                          <Link to="#">
                                            {subCategory.sub_category_title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>

              <ul className="nav navbar-nav nav2">
              <li className={`menu-item ${isUserMenuOpen ? "open" : ""}`}>
  <Link to="#" onClick={toggleUserMenu}>
    <AiOutlineUser size={20} />
  </Link>
  <ul className="sub-menu" style={{ display: isUserMenuOpen ? "block" : "none" }}>
    {user ? (
      <>
        <li>
          <Link to="/shop-Orders">
            <i className="fa fa-box"></i> My Orders
          </Link>
        </li>
        <li>
          <Link to="/shop-Profile">
            <i className="fa fa-user"></i> My Profile
          </Link>
        </li>
        <li>
          <Link to={''} 
            onClick={logout}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <i className="fa fa-right-from-bracket"></i> Logout
          </Link>
        </li>
      </>
    ) : (
      <>
        <li>
          <NavLink to="/shop-login" activeClassName="active-menu nav-icon">
            <BiLogIn size={20} title="Login" /> Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop-register" activeClassName="active-menu nav-icon">
            <MdOutlineAppRegistration size={22} title="Register" /> Register
          </NavLink>
        </li>
      </>
    )}
  </ul>
</li>
                <li>
                  <NavLink to="/shop" activeClassName="active-menu">
                    {" "}
                    <AiOutlineShopping className="nav-icon" size={22} />{" "}
                  </NavLink>
                  {/* <ul className="sub-menu">
											<li><Link to ={'/shop'}>Shop</Link></li>
											<li><Link to ={'/shop-sidebar'}>Shop Sidebar</Link></li>
											
										</ul> */}
                </li>
                <li>
                  <NavLink to="/shop-cart" activeClassName="active-menu">
                    <AiOutlineShoppingCart className="nav-icon" size={22} />{" "}
                    <span style={getBadgeStyle(cartItems.length,isMobile)}>
                      {cartItems.length}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop-wishlist" activeClassName="active-menu">
                    <AiOutlineHeart size={22} className="nav-icon" />
                    <span style={getBadgeStyle(wishlistItems.length, isMobile)}>
                      {wishlistItems.length}
                    </span>
                  </NavLink>
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
};
const getBadgeStyle = (count, isMobile) => ({
  position: "absolute",
  top: isMobile ? "10px" : "35px",
  right: isMobile ? "15px" : "-8px",
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
