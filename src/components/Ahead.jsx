import React from "react";

const Ahead = () => {
    return (
        <aside className="hidden absolute top-0 left-0 bg-gray-700 bg-opacity-75 h-screen w-screen z-10">
            <div className="absolute right-0 top-0 bg-white h-screen z-20 w-96 shadow-2xl p-6 flex flex-col gap-4">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-2">Корзина</h2>
                    <button className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                        <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"
                                  stroke="#DBDBDB"/>
                            <path
                                d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                                fill="#B5B5B5"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-4 flex-grow overflow-auto">
                    <div className="flex items-center justify-between gap-4 border rounded-xl p-4">
                        <img className="" src="/img/goods/1.jpg" alt="Sneakers" height={70} width={70}/>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
                            <p className="font-bold">12 999 руб.</p>
                        </div>
                        <button className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"
                                      stroke="#DBDBDB"/>
                                <path
                                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                                    fill="#B5B5B5"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-between gap-4 border rounded-xl p-4">
                        <img className="" src="/img/goods/1.jpg" alt="Sneakers" height={70} width={70}/>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
                            <p className="font-bold">12 999 руб.</p>
                        </div>
                        <button className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"
                                      stroke="#DBDBDB"/>
                                <path
                                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                                    fill="#B5B5B5"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-between gap-4 border rounded-xl p-4">
                        <img className="" src="/img/goods/1.jpg" alt="Sneakers" height={70} width={70}/>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">Мужские Кроссовки Nike Air Max 270</p>
                            <p className="font-bold">12 999 руб.</p>
                        </div>
                        <button className="border-0 opacity-60 hover:opacity-100 transition-opacity focus:outline-none">
                            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"
                                      stroke="#DBDBDB"/>
                                <path
                                    d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                                    fill="#B5B5B5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <span>Итого:</span>
                        <div className="border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"> </div>
                        <span className="font-bold">21 498 руб.</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Налог 5%:</span>
                        <div className="border-b-2 border-dashed flex-grow mx-1.5 mb-1.5"> </div>
                        <span className="font-bold">1074 руб.</span>
                    </div>
                </div>
                <button className="flex group justify-center items-center text-center border-0 bg-btn relative h-14 text-white rounded-xl active:bg-green-700 hover:opacity-90 focus:outline-none">
                    Оформить заказ
                    <img className="absolute right-8 transition duration-500 ease-in-out transform group-hover:translate-x-1" src="/img/arrow.svg" alt="Arrow"/>
                </button>
            </div>
        </aside>
    )
}

export default Ahead;
