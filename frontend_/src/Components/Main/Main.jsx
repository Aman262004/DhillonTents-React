import React from "react";
import { Link } from 'react-router-dom';
import './Main.css'
import mainpic1 from '../Assests/mainpic1.jpg'

const Main = () => {
    return(
        <div className="main">
            <div className="mainpic1">
            <img src={mainpic1} alt=""/>
            </div>
            <div className="tent-rental">
            <h1>Tent Rental</h1>
            </div>
            <div className="book-now-button">
                <Link to ="/booknow">
                    <button>Book Now</button>
                </Link>
            </div>
        </div>

    )

}
export default Main