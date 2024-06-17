import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assests/DhillonTents_Logo_white.png'
import cart_icon from '../Assests/shoppingcart.jpg'
import { Link } from 'react-router-dom';
const Navbar = () => {

    
        const [menu, setMenu] = useState("home");
  return(

    <div className='navbar'>
        <div className='nav-logo'>
        <img src={logo} alt="Dhillon Tents Logo" style={{ width: '200px', height: 'auto', marginRight: '0px' }} />

        </div>
        <ul className='nav-menu'>
          <li onClick ={() => {setMenu("home")}}><Link style={{textDecoration: 'none'}} to ='/'>HOME</Link>{menu ==="about us" ? <h/>:<></>}</li>
            <li onClick ={() => {setMenu("about us")}}><Link style={{textDecoration: 'none'}} to ='/AboutUs'>ABOUT US</Link>{menu ==="about us" ? <h/>:<></>}</li>
            <li onClick ={() => {setMenu("book now")}}><Link style={{textDecoration: 'none'}} to ='/BookNow'>BOOK NOW</Link>{menu ==="book now" ? <h/>:<></>}</li>
            <li onClick ={() => {setMenu("faqs")}}><Link style={{textDecoration: 'none'}} to ='/FAQS'>FAQS</Link>{menu ==="faqs" ? <h/>:<></>}</li>
            <li onClick ={() => {setMenu("contact us")}}><Link style={{textDecoration: 'none'}} to ='/ContactUs'>CONTACT US</Link>{menu ==="contact us" ? <h/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
        <Link style={{textDecoration: 'none'}} to="/Cart">
          <button>
            <img src={cart_icon} alt="Cart Icon" style={{ width: '75px', height: 'auto', marginRight: '20px' }} />
          </button>
        </Link>
            <div className='nav-cart-court'>0</div>
        </div>
    </div>
)

}
export default Navbar;