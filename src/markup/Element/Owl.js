import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imageBase from '../../constants/imageBase';
import '../../css/pagination.css';
import { useDispatch, useSelector } from 'react-redux';
import { insertCartData, updateCartData } from '../../redux/actions/cartItemActions';
import Swal from 'sweetalert2';
import { insertWishlistData, removeWishlistData } from '../../redux/actions/wishlistItemActions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import toast from 'react-hot-toast';
import { getUser } from '../../common/user';

const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Owl=({products,deviceType})=>{

	 const [user, setUser] = useState();
	  const [isAdding, setIsAdding] = useState();
	const cartItems = useSelector((state) => state.cartItems.cartItems);
	  const wishlistItems = useSelector(
		(state) => state.wishlistItems.wishlistItems)
		const dispatch=useDispatch();
const history=useHistory();
		const onUpdateCart = (data) => {
			if (isAdding) return;
			
			setIsAdding(true);
			// if (avaiableQuantity === 0) {
			//   return;
			// }
			console.log("updatedata", data);
			if (user) {
			  console.log("user", user);
			  data.contact_id = user.contact_id;
			  dispatch(updateCartData(data));
			} else {
			  
			  Swal.fire({
				title: 'You are not logged in!',
				text: "Do you want to login?",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
				cancelButtonText: 'Cancel',
			  }).then((result) => {
				if (result.isConfirmed) {
				  history.push('/shop-login')
				  
				}
			  });
			}
		  };
		
		  const onAddToCart = (data) => {
			if (isAdding) return;
			
			setIsAdding(true);
			if (user) {
			  if (data.price) {
				data.contact_id = user.contact_id;
		
				dispatch(insertCartData(data));
			  }
			} else {
			  
			  Swal.fire({
				title: 'You are not logged in!',
				text: "Do you want to login?",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
				cancelButtonText: 'Cancel',
			  }).then((result) => {
				if (result.isConfirmed) {
				  history.push('/shop-login')
				  
				}
			  });
			}
			setTimeout(() => {
			  setIsAdding(false);
			}, 2000);
		  };
		
		  const onAddToWishlist = (data) => {
			if (isAdding) return;
			
			setIsAdding(true);
			if (user) {
			  data.contact_id = user.contact_id;
			  dispatch(insertWishlistData(data));
			  toast.success("Added to wishlist!");
			} else {
		   
						  Swal.fire({
							title: 'You are not logged in!',
							text: "Do you want to login?",
							icon: 'warning',
							showCancelButton: true,
							confirmButtonColor: '#3085d6',
							cancelButtonColor: '#d33',
							confirmButtonText: 'Yes',
							cancelButtonText: 'Cancel',
						  }).then((result) => {
							if (result.isConfirmed) {
							  history.push('/shop-login')
							  
							}
						  });
					   
			}
			setTimeout(() => {
			  setIsAdding(false);
			}, 2000);
		  };
		
		  useEffect(() => {
			const userInfo = getUser();
			setUser(userInfo);
		  }, []);
		
	 
	console.log('products',products);
		return(
			<div class="section-full related-products content-inner bg-gray-light">
				<div class="container">
					<h2 class="title">Related products</h2>
					<div class="products-carousel">
						<Carousel 
							autoPlay={deviceType !== "mobile" ? true : false}
							responsive={responsive}
							arrows={false}							
						>
							{/* <div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/product/item1.jpg")} alt="" />
										<div class="price">
											$35.00 
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							
							
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/product/item2.jpg")} alt="" />
										<span class="sale">Sale!</span>
										<div class="price">
											<del>$25.00</del> $35.00 
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							
							
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/product/item1.jpg")} alt="" />
										<div class="price">
											$20.00 
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-detail'}>Cupcakes</Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
										
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/product/item2.jpg")} alt="" />
										<span class="sale">Sale!</span>
										<div class="price">
											<del>$25.00</del> $35.00 
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/product/item1.jpg")} alt="" />
										<span class="sale">Sale!</span>
										<div class="price">
											<del>$25.00</del> $35.00 
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
										<Link to={"/shop-product-details"} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/product/item2.jpg")} alt="" />
										<span class="sale">Sale!</span>
										<div class="price">
											<del>$25.00</del> $35.00 
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={"shop-product-details"}>Pumpkin cakes</Link></h4>
										<Link to={"shop-product-details"} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							</div> */}
 {products?.map((product, index) => (
  <div key={index} className="p-a15">
    <div className="item-box shop-item">
      <div className="item-img">
        {product?.images && product.images.length > 0 ? (
          <img
            src={`${imageBase}${product.images[0]}`}
            alt={product.title}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No Image Available
          </div>
        )}
        {product.sale && <span className="sale">Sale!</span>}
        <div className="price">
          {product.discountPrice ? (
            <>
              <del>${product.originalPrice}</del> ${product.discountPrice}
            </>
          ) : (
            `$${product.price}`
          )}
        </div>
      </div>
      <div className="item-info text-center">
	  <Link to={`/shop-product-details/${product.product_id}`}>
        <h6 className="item-title">
         
            {product.title}
         
        </h6>
		</Link>
		<div className="button-container">
        <button
									 onClick={() => {
									   if (
										 cartItems.filter(
										   (cartItem) =>
											 cartItem.product_id === product.product_id
										 )[0]?.qty > 0
									   ) {
										 product.qty =
										   parseFloat(
											 cartItems.filter(
											   (cartItem) =>
												 cartItem.product_id ===
												 product.product_id
											 )[0]?.qty
										   ) + Number(1);
										 product.basket_id = cartItems.filter(
										   (cartItem) =>
											 cartItem.product_id === product.product_id
										 )[0].basket_id;
										 onUpdateCart(product);
									   } else {
										 onAddToCart(product);
									   }
									 }}
									 className="btn btnhover m-1"
								   >
									 <i className="ti-shopping-cart m-r5"></i> 
								   </button>
								   <button
									 onClick={() => {
									   const isInWishlist = wishlistItems.filter(
										 (cartItem) =>
										   cartItem.product_id === product.product_id
									   )[0];
									   console.log("wishlistitem", isInWishlist);
									   if (isInWishlist) {
										 dispatch(removeWishlistData(isInWishlist));
									   } else {
										 onAddToWishlist(product);
									   }
									 }}
									 className={`btn btnhover m-1 ${
									   wishlistItems.some(
										 (item) =>
										   item.product_id === product.product_id
									   )
										 ? "btn-primary"
										 : ""
									 }`}
								   >
									 <i className="ti-heart m-r5"></i>
								   </button>
								   </div>
      </div>
    </div>
  </div>
))}
						
						</Carousel>
					</div>
				</div>		
			</div>	
		);	
	}	
		

export default Owl;