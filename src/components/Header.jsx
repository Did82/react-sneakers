import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="flex justify-between p-4 border-b">
            <Link to="/">
                <div className="flex gap-3 m-4 items-center">
                    <img src="/img/logo.png" alt="logo" className="w-10 h-10"/>
                    <div>
                        <h3 className="font-bold uppercase text-xl">React Sneakers</h3>
                        <p className="text-sm text-gray-500">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <div className="flex items-center m-4">
                <ul className="flex gap-6 items-center">
                    <li className="flex gap-2 items-center cursor-pointer" onClick={props.onClickCart}>
                        <img src="/img/cart.svg" alt="Cart"/>
                        <span>1205 руб.</span>
                    </li>
                    <li className="cursor-pointer transition ease-in-out duration-200 transform hover:scale-125">
                        <Link to="/favorites">
                            <img src="/img/favorites.svg" alt="Favorites"/>
                        </Link>
                    </li>
                    <li className="cursor-pointer transition ease-in-out duration-200 transform hover:scale-125">
                        <img src="/img/user.svg" alt="User"/>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
