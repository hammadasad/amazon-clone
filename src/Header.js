import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function header() {
    return (
        <div className="Header">
            <Link to="/">
                <div className="Header-logo">
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}></img>
                </div>
            </Link>
            <div className="Header-optionAddress">
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello,</span>
                    <span className="Header-optionLineTwo">Select Your address</span>
                </div>
                
            </div>

            <div className="Header-search">
                <input className="Header-searchInput" type="text"></input>
                <div className="Header-searchIconContainer">
                    <SearchIcon></SearchIcon>
                    {/* Icon */}
                </div>
            </div>

            <div className="Header-navItems">
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello, Hammad</span>
                    <span className="Header-optionLineTwo">Account & List</span>
                </div>
                <div className="Header-option">
                    <span className="Header-optionLineOne">Returns</span>
                    <span className="Header-optionLineTwo">& Orders</span>
                </div>
            </div>
            <Link to="/cart">
                <div className="Header-optionCart">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <div className="Header-cartCount">10</div>
                </div>
            </Link>
        </div>
    )
}

export default header
