import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index1 from './Pages/Index1';
import Index2 from './Pages/Index2';

import Meal from './Pages/mealplan';
import About from './Pages/About';
import Ourservices from './Pages/Ourservices';
import Faqs from './Pages/Faq';
import Booking from './Pages/Booking';
import Error from './Pages/Error';
import Calendar from './Pages/Calendar';
import Team from './Pages/Team';

import Ourmenustyle1 from './Pages/Ourmenustyle1';
import Ourmenustyle2 from './Pages/Ourmenustyle2';
import Ourmenustyle3 from './Pages/Ourmenustyle3';
import Ourmenustyle4 from './Pages/Ourmenustyle4';

import blogDetails from './Pages/blogDetail';
import Bloggrid2 from './Pages/Bloggrid2';
import Bloggridrightsidebar from './Pages/Bloggridrightsidebar';
import Bloggridleftsidebar from './Pages/Bloggridleftsidebar';
import Bloggride3 from './Pages/Bloggride3';

import Bloghalfimg from './Pages/Bloghalfimg';
import Halfimgsidebar from './Pages/Halfimgsidebar';
import Halfimgleftsidebar from './Pages/Halfimgleftsidebar';

import Bloglargeimg from './Pages/Bloglargeimg';
import Bloglargeimgsidebar from './Pages/Bloglargeimgsidebar';
import Bloglargeimgleftsidebar from './Pages/Bloglargeimgleftsidebar';

import Blogsingle from './Pages/Blogsingle';
import Blogsinglesidebar from './Pages/Blogsinglesidebar';
import Blogsingleleftsidebar from './Pages/Blogsingleleftsidebar';

import ProductDetails from './Pages/CategoryDetail';
import Shop from './Pages/Shop';
import Shopsidebar from './Pages/Shopsidebar';
import Shopproduct from './Pages/Shopproduct';
import Shopcart from './Pages/Shopcart';
import Shopwishlist from './Pages/Shopwishlist';
import ShopOrders from './Pages/ShopOrders';
import Shopchekout from './Pages/Shopchekout';
import Profile from './Pages/Profile';
import Shoplogin from './Pages/Shoplogin';
import Shopregister from './Pages/Shopregister';


import Contact from './Pages/Contact';
import Contact2 from './Pages/Contact2';
import MailVerification from './Pages/Mailverification';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';



class Markup extends Component{ 
	
	render(){
		return(
			<HashRouter>
				<Switch>
					<Route path='/' exact component={Index1} />
					<Route path='/Home' exact component={Index1} />
					<Route path='/index-2' exact component={Index2} />
					<Route path='/Meal-Plan' exact component ={Meal} />
					<Route path='/About-Us' exact component ={About} />
					<Route path='/our-services' exact component ={Ourservices} />
					<Route path='/faq' exact component ={Faqs} />
					<Route path='/booking' exact component ={Booking} />
					<Route path='/error-404' exact component ={Error} />
					<Route path='/calendar' exact component ={Calendar} />
					<Route path='/team' exact component ={Team} />
					
					
					<Route path='/our-menu-1' exact component ={Ourmenustyle1} />
					<Route path='/our-menu-2' exact component ={Ourmenustyle2} />
					<Route path='/our-menu-3' exact component ={Ourmenustyle3} />
					<Route path='/our-menu-4' exact component ={Ourmenustyle4} />
					
					
					<Route path='/blog-grid-2' exact component ={Bloggrid2} />
					<Route path='/blog-grid-2-sidebar' exact component ={Bloggridrightsidebar} />
					<Route path='/blog-grid-2-sidebar-left' exact component ={Bloggridleftsidebar} />
					<Route path='/blog-grid-3' exact component ={Bloggride3} />
					
					<Route path='/blog-half-img' exact component ={Bloghalfimg} />
					<Route path='/blog-half-img-sidebar' exact component ={Halfimgsidebar} />
					<Route path='/blog-half-img-left-sidebar' exact component ={Halfimgleftsidebar} />
					
					<Route path='/blog-large-img' exact component ={Bloglargeimg} />
					<Route path='/blog-large-img-sidebar' exact component ={Bloglargeimgsidebar} />
					<Route path='/blog-large-img-left-sidebar' exact component ={Bloglargeimgleftsidebar} />
					
					<Route path='/blog-single' exact component ={Blogsingle} />
					<Route path='/blog-single-sidebar' exact component ={Blogsinglesidebar} />
					<Route path='/blog-single-left-sidebar' exact component ={Blogsingleleftsidebar} />
					
					<Route path='/shop' exact component ={Shop} />
					<Route path='/shop-sidebar' exact component ={Shopsidebar} />
					<Route path='/shop-product-details/:id' exact component ={Shopproduct} />					
					<Route path='/shop-cart' exact component ={Shopcart} />					
					<Route path='/shop-wishlist' exact component ={Shopwishlist} />
					<Route path='/shop-Orders' exact component ={ShopOrders} />
					<Route path='/shop-checkout' exact component ={Shopchekout} />
					<Route path='/shop-profile' exact component ={Profile} />
					<Route path='/shop-login' exact component ={Shoplogin} />
					<Route path='/shop-register' exact component ={Shopregister} />
					<Route path='/mail-verification' exact component ={MailVerification} />
					<Route path="/CategoryDetail/:categoryId" exact component ={ProductDetails} />
					<Route path="/blogDetail/:blogId" exact component ={blogDetails} />

					<Route path='/reset-password' exact component ={ResetPassword} />
					<Route path='/forgot-password' exact component ={ForgotPassword} />

					<Route path='/Contact-Us' exact component ={Contact} />
					<Route path='/contact-2' exact component ={Contact2} />
				
					
					
				</Switch>
			</ HashRouter>
		)
		
	}
}

export default Markup;