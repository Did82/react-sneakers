import React from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Ahead from "./components/Ahead";
import axios from "axios";

const App = () => {
    const [goods, setGoods] = React.useState([]);
    const [goodsInCart, setGoodsInCart] = React.useState([]);
    const [isCartOpen, setIsCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        axios.get('https://60f0071af587af00179d3cf2.mockapi.io/goods').then(res => setGoods(res.data));
        axios.get('https://60f0071af587af00179d3cf2.mockapi.io/cart').then(res => setGoodsInCart(res.data));
    },[]);

    React.useEffect(() => {
        axios.get('https://60f0071af587af00179d3cf2.mockapi.io/cart').then(res => setGoodsInCart(res.data));
    }, [isCartOpen])

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    const onAddToCart = (obj) => {
        axios.post('https://60f0071af587af00179d3cf2.mockapi.io/cart', obj);
        setGoodsInCart(prev => [...prev, obj]);
    }

    const onRemoveCartItem = (id) => {
        console.log(id)
        axios.delete(`https://60f0071af587af00179d3cf2.mockapi.io/cart/${id}`);
        setGoodsInCart(prev => prev.filter(item => item.id !== id));
    }

    return (
        <div className="bg-white rounded-3xl shadow-lg max-w-wrapper my-12 mx-auto">
            <Header onClickCart={() => setIsCartOpened(true)}/>
            {isCartOpen && <Ahead onClose={() => setIsCartOpened(false)} items={goodsInCart} onRemove={onRemoveCartItem}/>}

            <main className="p-4">
                <div className="flex items-center justify-between m-4">
                    <h1 className="font-bold text-3xl">
                        {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
                    </h1>
                    <div className="flex border rounded-lg items-center w-76">
                        <img src="/img/search.svg" alt="Search" className="mx-2"/>
                        <input
                            onChange={onChangeSearchValue}
                            value={searchValue}
                            className="border-0 outline-none h-10 text-gray-700"
                            type="text"
                            placeholder="Поиск..."/>
                        {searchValue && <img onClick={() => setSearchValue('')} src="/img/delete.svg" alt="Clear" className="mr-2 justify-self-end w-6"/>}
                    </div>
                </div>
                <div className="flex p-4 flex-wrap gap-8 justify-center">
                    {
                        goods
                            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item) => (
                                <Card
                                    key={item.imgUrl}
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

