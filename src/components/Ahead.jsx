import React from "react";

const Ahead = ({ onClose, items = [] }) => {
    return (
        <aside className="fixed inset-0 overflow-y-hidden z-10">
            <div className="absolute inset-0 overflow-hidden">
                <div onClick={onClose}
                     className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
                <div className="absolute inset-y-0 right-0 bg-white w-96 shadow-2xl p-6 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold mb-2">Корзина</h2>
                        <button onClick={onClose}
                                className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                            <img src="/img/delete.svg" alt="Close"/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow overflow-auto">
                        {items.map((obj) => (
                            <div className="flex items-center justify-between gap-4 border rounded-xl p-4">
                                <img className="" src={obj.imgUrl} alt="Sneakers" height={70} width={70}/>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm">{obj.title}</p>
                                    <p className="font-bold">{obj.price} руб.</p>
                                </div>
                                <button
                                    className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                                    <img src="/img/delete.svg" alt="Delete" className="w-14"/>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span>Итого:</span>
                            <div className="border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"></div>
                            <span className="font-bold">21 498 руб.</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Налог 5%:</span>
                            <div className="border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"></div>
                            <span className="font-bold">1074 руб.</span>
                        </div>
                    </div>
                    <button
                        className="flex group justify-center items-center text-center border-0 bg-btn relative h-14 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none">
                        Оформить заказ
                        <img
                            className="absolute right-8 transition duration-500 ease-in-out transform group-hover:translate-x-1"
                            src="/img/arrow.svg" alt="Arrow"/>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Ahead;
