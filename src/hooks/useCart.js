import React from "react";
import AppContext from "../context";

export const useCart = () => {

    const {goods, goodsInCart, setGoodsInCart} = React.useContext(AppContext);
    const totalPrice = goods
        .filter(obj => !!goodsInCart.find(item => item.good === obj.id))
        .reduce((sum, item) => sum + item.price, 0);
    return {goodsInCart, setGoodsInCart, totalPrice};
}
