import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Ahead from "./components/Ahead";

const App = () => {
    const [goods, setGoods] = React.useState([]);
    const [goodsInCart, setGoodsInCart] = React.useState([]);
    const [isCartOpen, setIsCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://60f0071af587af00179d3cf2.mockapi.io/goods')
            .then((res) => res.json())
            .then((json) => setGoods(json));
    },[]);

    const onAddToCart = (obj) => {
        setGoodsInCart(prev => [...prev, obj]);
    }

    return (
        <div className="bg-white rounded-3xl shadow-lg max-w-wrapper my-12 mx-auto">
            <Header onClickCart={() => setIsCartOpened(true)}/>
            {isCartOpen && <Ahead onClose={() => setIsCartOpened(false)} items={goodsInCart}/>}

            <main className="p-4">
                <div className="flex items-center justify-between m-4">
                    <h1 className="font-bold text-3xl">Все кроссовки</h1>
                    <div className="flex border rounded-lg items-center w-60">
                        <img src="/img/search.svg" alt="Search" className="mx-2"/>
                        <input className="border-0 outline-none h-10 text-gray-700" type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="flex p-4 flex-wrap gap-8 justify-center">
                    {
                        goods.map((item) => (
                                <Card
                                    title={item.name}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    onClickFavorite={() => alert(item.name)}
                                    onClickPlus={onAddToCart}
                                />
                            )
                        )
                    }
                </div>
            </main>

        </div>
    )
}

export default App

