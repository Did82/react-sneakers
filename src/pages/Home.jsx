import React, {Fragment} from 'react';
import Card from "../components/Card";

const Home = ({
                  goods,
                  searchValue,
                  onChangeSearchValue,
                  onAddToCart,
                  isGoodsInCart,
                  onAddToFavorites,
                  goodsInFavirites,
                  setSearchValue,
                  isGoodsInFavorites
              }) => {
    return (
        <Fragment>
            <div className="flex items-center justify-between m-4">
                <h1 className="font-bold text-3xl">
                    {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
                </h1>
                <div className="flex border rounded-lg items-center w-76">
                    <img src="/img/search.svg" alt="Search" className="mx-2"/>
                    <input
                        onChange={onChangeSearchValue}
                        value={searchValue}
                        className="border-0 outline-none rounded-lg h-10 text-gray-700"
                        type="text"
                        placeholder="Поиск..."/>
                    {searchValue && <img onClick={() => setSearchValue('')} src="/img/delete.svg" alt="Clear"
                                         className="mr-2 justify-self-end w-6"/>}
                </div>
            </div>
            <div className="flex p-4 flex-wrap gap-10 justify-start">
                {
                    goods
                        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                                <Card
                                    key={item.id}
                                    onClickFavorite={onAddToFavorites}
                                    onClickPlus={onAddToCart}
                                    goodsInCart={isGoodsInCart(item.id)}
                                    goodsInFavorites={isGoodsInFavorites(item.id)}
                                    loading={false}
                                    {...item}
                                />
                            )
                        )
                }
            </div>
        </Fragment>
    )
};

export default Home;
