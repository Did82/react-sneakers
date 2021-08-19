import React, {Fragment} from "react";
import Empty from "./Empty";
import AppContext from "../context";
import axios from "axios";
import {useCart} from "../hooks/useCart";
import {Transition} from '@headlessui/react';

const Ahead = ({onClose, onRemove}) => {
    const [isOrdered, setIsOrdered] = React.useState(false);
    const [orderId, setOrderId] = React.useState();
    const {goods, goodsInCart, setGoodsInCart, isCartOpen} = React.useContext(AppContext);
    const {totalPrice} = useCart();
    const onClickOrder = () => {
        axios.post(`https://60f0071af587af00179d3cf2.mockapi.io/orders`, {goods: goodsInCart})
            .then(res => setOrderId(res.data.id))
            .catch(err => console.log(err));
        setIsOrdered(true);
        goodsInCart.forEach(item => {
            axios.delete(`https://60f0071af587af00179d3cf2.mockapi.io/cart/${item.id}`)
                .then(res => console.log(res.data.id, res.statusText))
                .catch(err => console.log(err));
        });
        setGoodsInCart([]);
    }
    return (
        <Transition.Root appear={true}
                         show={isCartOpen}
                         as={Fragment}>
            <aside className="fixed inset-0 overflow-y-hidden z-10">
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        // appear={true}
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div onClick={onClose}
                             className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
                    </Transition.Child>

                    <Transition.Child
                        // appear={true}
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className="absolute inset-y-0 right-0 bg-white w-96 shadow-2xl p-6 flex flex-col gap-4">
                            <div className="flex justify-between flex-none">
                                <h2 className="text-xl font-bold mb-2">Корзина</h2>
                                <button onClick={onClose}
                                        className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                                    <img src="/img/delete.svg" alt="Close"/>
                                </button>
                            </div>
                            {goodsInCart.length > 0 ? <Fragment>
                                    <div className="flex flex-col gap-4 flex-grow overflow-auto">
                                        {goods
                                            .filter(obj => !!goodsInCart.find(item => item.good === obj.id))
                                            .map(obj => (
                                                <div key={obj.id}
                                                     className="flex items-center justify-between gap-4 border rounded-xl p-4">
                                                    <img className="" src={obj.imgUrl} alt="Sneakers" height={70}
                                                         width={70}/>
                                                    <div className="flex flex-col gap-2">
                                                        <p className="text-sm">{obj.name}</p>
                                                        <p className="font-bold">{obj.price} руб.</p>
                                                    </div>
                                                    <button
                                                        className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                                                        <img
                                                            onClick={() => onRemove(goodsInCart.find(item => item.good === obj.id))}
                                                            src="/img/delete.svg" alt="Delete"
                                                            className="w-14"/>
                                                    </button>
                                                </div>
                                            ))}
                                    </div>
                                    <div className="flex flex-col gap-2  flex-none">
                                        <div className="flex justify-between">
                                            <span>Итого:</span>
                                            <div className="border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"></div>
                                            <span className="font-bold">{totalPrice} руб.</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Включая налог 5%:</span>
                                            <div className="border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"></div>
                                            <span
                                                className="font-bold">{totalPrice - Math.round(totalPrice * 0.95)} руб.</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClickOrder}
                                        className="flex flex-none group justify-center items-center text-center border-0 bg-btn relative h-14 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none">
                                        Оформить заказ
                                        <img
                                            className="absolute right-8 transition duration-500 ease-in-out transform group-hover:translate-x-1"
                                            src="/img/arrow.svg" alt="Arrow"/>
                                    </button>
                                </Fragment> :
                                <Empty
                                    title={isOrdered ? "Заказ оформлен!" : "Корзина пустая"}
                                    description={isOrdered ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                                    img={isOrdered ? "/img/order.jpg" : "/img/cart-empty.jpg"}
                                    onClose={onClose}/>}
                        </div>
                    </Transition.Child>
                </div>
            </aside>
        </Transition.Root>
    )
}

export default Ahead;
