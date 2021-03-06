import React from 'react';
import AppContext from "./context";
import Header from "./components/Header";
import Ahead from "./components/Ahead";
import axios from "axios";
import Home from "./pages/Home";
import {Route} from 'react-router';
import Favorites from "./pages/Favorites";
import Orders from "./pages/orders";

const App = () => {
    const [goods, setGoods] = React.useState([]);
    const [goodsInCart, setGoodsInCart] = React.useState([]);
    const [goodsInFavorites, setGoodsInFavorites] = React.useState([]);
    const [isCartOpen, setIsCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const goods = () => axios.get('https://60f0071af587af00179d3cf2.mockapi.io/goods');
        const cart = () => axios.get('https://60f0071af587af00179d3cf2.mockapi.io/cart');
        const favorites = () => axios.get('https://60f0071af587af00179d3cf2.mockapi.io/favorites');

        Promise.all([cart(), favorites(), goods()])
            .then(res => {
                setIsLoading(false);
                setGoodsInCart(res[0].data);
                setGoodsInFavorites(res[1].data);
                setGoods(res[2].data);
            });
    }, [])

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    const isGoodsInCart = id => goodsInCart.some(good => good.good === id);
    const isGoodsInFavorites = id => goodsInFavorites.some(good => good.good === id);

    const onAddToCart = (obj) => {
        const item = goodsInCart.find(good => good.good === obj.good);
        if (isGoodsInCart(obj.good)) {
            axios.delete(`https://60f0071af587af00179d3cf2.mockapi.io/cart/${item.id}`)
                // .then(res => console.log(res.data))
                .catch(err => console.error(err))
                .then(() => setGoodsInCart(prev => prev.filter(el => el.good !== obj.good)))
        } else {
            axios.post(`https://60f0071af587af00179d3cf2.mockapi.io/cart`, obj)
                .then(res => setGoodsInCart(prev => [...prev, res.data]))
                .catch(err => console.error(err))
        }
    }

    const onAddToFavorites = (obj) => {
        const item = goodsInFavorites.find(good => good.good === obj.good);
        if (isGoodsInFavorites(obj.good)) {
            axios.delete(`https://60f0071af587af00179d3cf2.mockapi.io/favorites/${item.id}`)
                // .then(res => console.log(res.data))
                .catch(err => console.error(err))
                .then(() => setGoodsInFavorites(prev => prev.filter(el => el.good !== obj.good)))
        } else {
            axios.post(`https://60f0071af587af00179d3cf2.mockapi.io/favorites`, obj)
                .then((res) => setGoodsInFavorites(prev => [...prev, res.data]))
                .catch(err => console.error(err))
        }
    }

    const onRemoveCartItem = (obj) => {
        axios.delete(`https://60f0071af587af00179d3cf2.mockapi.io/cart/${obj.id}`)
            // .then(res => console.log(res.data))
            .catch(err => console.error(err))
            .then(() => setGoodsInCart(prev => prev.filter(item => item.id !== obj.id)));
    }

    return (
        <AppContext.Provider
            value={{
                goods,
                goodsInCart,
                goodsInFavorites,
                isGoodsInCart,
                isGoodsInFavorites,
                isCartOpen,
                setGoodsInCart,
                isLoading,
                setIsLoading
            }}>
            <div className="bg-white rounded-3xl shadow-lg max-w-wrapper my-12 mx-auto flex flex-col">
                <Header onClickCart={() => {
                    setIsCartOpened(true);
                    document.body.style.overflow = "hidden";
                }}/>

                <Ahead
                    onClose={() => {
                        setIsCartOpened(false);
                        document.body.style.overflow = "auto";
                    }}
                    onRemove={onRemoveCartItem}
                />

                <main className="p-4 flex flex-col flex-grow">
                    <Route path="/react-sneakers/" exact>
                        <Home
                            goods={goods}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchValue={onChangeSearchValue}
                            onAddToCart={onAddToCart}
                            onAddToFavorites={onAddToFavorites}
                            goodsInFavirites={goodsInFavorites}
                            isLoading={isLoading}
                        />
                    </Route>
                    <Route path="/react-sneakers/favorites/" exact>
                        <Favorites
                            onAddToCart={onAddToCart}
                            onAddToFavorites={onAddToFavorites}
                        />
                    </Route>
                    <Route path="/react-sneakers/orders/" exact>
                        <Orders
                            onAddToCart={onAddToCart}
                            onAddToFavorites={onAddToFavorites}
                        />
                    </Route>
                </main>
            </div>
        </AppContext.Provider>
    )
}

export default App
