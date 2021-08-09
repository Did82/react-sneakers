import React, {Fragment} from 'react';
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = ({onAddToCart, onAddToFavorites}) => {
    const {goods, goodsInFavorites} = React.useContext(AppContext);
    return (
        <Fragment>
            <div className="flex items-center justify-between m-4">
                <h1 className="font-bold text-3xl">Мои закладки</h1>
            </div>
            <div className="flex p-4 flex-wrap gap-8 justify-start">
                {
                    goods
                        .filter(obj => !!goodsInFavorites.find(item => item.good === obj.id))
                        .map((item) => (
                                <Card
                                    key={item.id}
                                    onClickFavorite={onAddToFavorites}
                                    onClickPlus={onAddToCart}
                                    favorites={goodsInFavorites}
                                    {...item}
                                />
                            )
                        )
                }
            </div>
        </Fragment>
    )
};

export default Favorites;
