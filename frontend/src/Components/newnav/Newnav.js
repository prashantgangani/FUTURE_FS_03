import React from 'react'
import "../newnav/newnav.css";
import { NavLink } from 'react-router-dom';

const Newnav = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <NavLink to="/all"><i className="fas fa-shopping-cart"></i> All</NavLink>
                    <NavLink to="/mobiles">Mobiles</NavLink>
                    <NavLink to="/best-sellers">Best Sellers</NavLink>
                    <NavLink to="/fashion">Fashion</NavLink>
                    <NavLink to="/customer-service">Customer Service</NavLink>
                    <NavLink to="/electronics">Electronics</NavLink>
                    <NavLink to="/prime">Prime</NavLink>
                    <NavLink to="/todays-deals">Today's Deals</NavLink>
                    <NavLink to="/amazon-pay">Amazon Pay</NavLink>
                </div>
                <div className="right_data">
                    <img src="nav.jpg" alt="navdata" />
                </div>
            </div>
        </div>
    )
}

export default Newnav
