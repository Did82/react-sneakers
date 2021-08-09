import React, {Fragment} from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

const Card = ({
                  isLoading,
                  id,
                  name,
                  imgUrl,
                  price,
                  onClickPlus,
                  onClickFavorite,
              }) => {
    const { isGoodsInCart, isGoodsInFavorites } = React.useContext(AppContext);

    const onClickPlusButton = () => {
        onClickPlus({good: id});
    };

    const onClickFavoriteButton = () => {
        // setIsFavorite(!isFavorite);
        onClickFavorite({good: id});
    };

    return (
        <div
            className="border rounded-2xl w-56 p-6 flex flex-col gap-4 relative hover:shadow-xl transition ease-in-out duration-200 transform hover:-translate-y-1">
            {isLoading ?
                <ContentLoader
                    speed={2}
                    width={200}
                    height={235}
                    viewBox="0 0 210 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="175" height="130"/>
                    <rect x="0" y="170" rx="4" ry="4" width="93" height="15"/>
                    <rect x="0" y="230" rx="0" ry="0" width="70" height="32"/>
                    <rect x="143" y="230" rx="0" ry="0" width="32" height="32"/>
                    <rect x="0" y="150" rx="4" ry="4" width="175" height="15"/>
                </ContentLoader>
                : <Fragment>
                    <button
                        className="absolute border-0  focus:outline-none transition ease-in-out duration-200 transform hover:scale-125"
                        onClick={onClickFavoriteButton}>
                        <img src={isGoodsInFavorites(id) ? '/img/heart-active.svg' : '/img/heart.svg'} alt="Heart"/>
                    </button>
                    <img className="place-self-center" src={imgUrl} alt="sneakers" width={133} height={113}/>
                    <h5 className="font-normal">{name}</h5>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="uppercase text-sm text-gray-400">цена:</p>
                            <b>{price} руб.</b>
                        </div>
                        <button
                            className="border-0 focus:outline-none transition ease-in-out duration-200 transform hover:scale-125"
                            onClick={onClickPlusButton}>
                            <img src={isGoodsInCart(id) ? '/img/checked.svg' : '/img/plus.svg'} alt="Plus"/>
                        </button>
                    </div>
                </Fragment>}
        </div>)
}

export default Card;
