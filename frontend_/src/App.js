
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import FAQS from './Pages/FAQS';
import BookNow from './Pages/BookNow';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = 'aboutus' element = {<AboutUs/>}/>
        <Route path = '/booknow' element = {<BookNow/>}/>
        <Route path = '/faqs' element = {<FAQS/>}/>
        <Route path = '/contactus' element = {<ContactUs/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
