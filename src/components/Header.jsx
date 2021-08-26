import React from "react";
import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";
import images from "../assets";
// import AppContext from "../context";

// import logo from '../assets/img/logo.png';
// import cart from '../assets/img/cart.svg';
// import favorites from '../assets/img/favorites.svg';
// import user from '../assets/img/user.svg';

const Header = (props) => {
    const {totalPrice} = useCart();
    // const {getImageUrl} = React.useContext(AppContext);

    return (
        <header className="flex justify-between p-4 border-b">
            <Link to="/react-sneakers/">
                <div className="group flex gap-3 m-4 items-center">
                    <img src={images.logo} alt="logo" className="w-10 h-10 transition ease-in-out duration-200 transform group-hover:scale-125"/>
                    <div>
                        <h3 className="font-bold uppercase text-xl">React Sneakers</h3>
                        <p className="text-sm text-gray-500">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <div className="flex items-center m-4">
                <ul className="flex gap-6 items-center">
                    <li className="group flex gap-2 items-center cursor-pointer" onClick={props.onClickCart}>
                        <img src={images.cart} alt="Cart" className="transition ease-in-out duration-200 transform group-hover:scale-125"/>
                        <span>{totalPrice} руб.</span>
                    </li>
                    <li className="cursor-pointer transition ease-in-out duration-200 transform hover:scale-125">
                        <Link to="/react-sneakers/favorites/">
                            <img src={images.favorites} alt="Favorites"/>
                        </Link>
                    </li>
                    <li className="cursor-pointer transition ease-in-out duration-200 transform hover:scale-125">
                        <Link to="/react-sneakers/orders/">
                            <img src={images.user} alt="User"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
