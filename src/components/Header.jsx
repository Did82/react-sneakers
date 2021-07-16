import React from "react";

const Header = (props) => {
    return (
        <header className="flex justify-between p-4 border-b">
            <div className="flex gap-3 m-4 items-center">
                <img src="/img/logo.png" alt="logo" className="w-10 h-10"/>
                <div>
                    <h3 className="font-bold uppercase text-xl">React Sneakers</h3>
                    <p className="text-sm text-gray-500">Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="flex items-center m-4">
                <ul className="flex gap-4 items-center">
                    <li className="flex gap-2 items-center cursor-pointer" onClick={props.onClickCart}>
                        <img src="/img/cart.svg" alt="Cart"/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src="/img/favorites.svg" alt="Favorites"/>
                    </li>
                    <li>
                        <img src="/img/user.svg" alt="User"/>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
